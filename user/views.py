import base64
import random
import time
import numpy as np
from PIL import Image
import os
import cv2
from django.db import transaction
from django.http import JsonResponse
from django.shortcuts import render, redirect
from user.models import HubuUser


def check_login(func):
    def inner(*args, **kwargs):
        # 判断是否登录
        try:
            user_id = args[0].session["login_user"]
            print(user_id)
            if user_id == "" or user_id == None or user_id == 0:
                return redirect("/user/login/?next=" + args[0].path)
        except Exception as e:
            return redirect("/user/login/?next=" + args[0].path)
        return func(*args, **kwargs)
    return inner


def edit(request):
    if request.method == "GET":
        return render(request, 'user/edit.html')
    if request.method == "POST" and request.is_ajax():
        user_id = request.session["login_user"]
        sid = transaction.savepoint()  # 开启事务
        try:
            user = HubuUser.objects.filter(id=user_id)[0]
            user.nickName = request.POST.get('nickname')
            user.realName = request.POST.get('realname')
            user.englishName = request.POST.get('english_name')
            user.sex = request.POST.get('sex')
            user.birthday = request.POST.get('birthday')
            user.nation = request.POST.get('nation')
            user.avatar = request.POST.get('avatar')
            user.image = request.POST.get('image')
            user.phone = request.POST.get('phone')
            user.email = request.POST.get('email')
            user.university = request.POST.get('university')
            user.profession = request.POST.get('profession')
            user.address = request.POST.get('address')
            user.synopsis = request.POST.get('synopsis')
            user.description = request.POST.get('description')
            user.save()
            res = {
                "code": 1,
                "msg": "修改成功！",
            }
            transaction.savepoint_commit(sid)
        except Exception as e:
            transaction.savepoint_rollback(sid)
            print(e)
            res = {
                "code": 0,
                "msg": "修改失败，未知异常，请检查后重试！",
            }
        return JsonResponse(res, json_dumps_params={'ensure_ascii': False})


@check_login
def update_face(request):
    if request.method == "GET":
        verify = request.session.get("verify")
        if verify == "" or verify == None:
            code = 0
        else:
            code = 1
        return render(request, 'user/face.html', {"code": code})
    if request.method == "POST" and request.is_ajax():
        user_id = request.session["login_user"]
        user_video = request.FILES.get("user_video", None)  # 获取上传的文件，如果没有文件，则默认为None
        filename = os.path.join("data/video_temp/", user_video.name).replace('\\', '/')  # 定义上传的文件名（绝对路径）
        if not user_video:
            return JsonResponse({"code": 0, "msg": "未找到上传的文件"}, json_dumps_params={'ensure_ascii': False})
        dest = open(filename, 'wb+')  # 创建一个文件，使用二进制模式打开，并写入文件流
        try:
            for chunk in user_video.chunks():
                dest.write(chunk)
        except Exception as e:
            return JsonResponse({"code": 0, "msg": "文件保存失败"}, json_dumps_params={'ensure_ascii': False})
        finally:
            dest.close()
        flag = cv2video(filename, user_id)
        if flag:
            num=train_face()
            if(num>0):
                res = {
                    "code": 1,
                    "msg": "人脸数据录入成功",
                }
            else:
                res = {
                    "code": 0,
                    "msg": "人脸数据训练失败，请联系管理员",
                }
        else:
            res = {
                "code": -1,
                "msg": "未识别到足够多的人脸，请检查摄像头后再重试！",
            }
        return JsonResponse(res, json_dumps_params={'ensure_ascii': False})


def train_face():
    path = 'data/Facedata'
    recognizer = cv2.face.LBPHFaceRecognizer_create()
    print('Training faces. It will take a few seconds. Wait ...')
    faces, ids = get_images_and_labels(path)
    recognizer.train(faces, np.array(ids))
    recognizer.write(r'data/face_trainer/trainer.yml')
    print("{0} faces trained. Exiting Program".format(len(np.unique(ids))))
    return len(np.unique(ids))


def get_images_and_labels(path):
    detector = cv2.CascadeClassifier("data/haarcascade_frontalface_default.xml")
    imagePaths = [os.path.join(path, f) for f in os.listdir(path)]
    faceSamples = []
    ids = []
    for imagePath in imagePaths:
        PIL_img = Image.open(imagePath).convert('L')  # convert it to grayscale
        img_numpy = np.array(PIL_img, 'uint8')
        id = int(os.path.split(imagePath)[-1].split(".")[1])
        faces = detector.detectMultiScale(img_numpy)
        for (x, y, w, h) in faces:
            faceSamples.append(img_numpy[y:y + h, x: x + w])
            ids.append(id)
    return faceSamples, ids


def cv2video(video_path, username):
    video = cv2.VideoCapture(video_path)
    # fps = video.get(propId=cv2.CAP_PROP_FPS)
    # width = video.get(propId=cv2.CAP_PROP_FRAME_WIDTH)
    # height = video.get(propId=cv2.CAP_PROP_FRAME_HEIGHT)
    # count = video.get(propId=cv2.CAP_PROP_FRAME_COUNT)
    face_detector = cv2.CascadeClassifier('data/haarcascade_frontalface_alt.xml')
    fn = 1
    while True:
        retval, image = video.read()  # retval boolean表明是否获得了图片，True
        if retval == False:  # 取了最后一张，再读取，没有了
            return False
        image = cv2.resize(image, (460, 345))
        gray = cv2.cvtColor(image, code=cv2.COLOR_BGR2GRAY)
        faces = face_detector.detectMultiScale(gray)  # 耗时操作！扫描整张图片
        for x, y, w, h in faces:
            # cv2.rectangle(image, pt1=(x, y), pt2=(x + w, y + h), color=[0, 0, 0], thickness=1)
            cv2.imwrite('data/Facedata/User.{0}.{1}.jpg'.format(username, fn), image)
            fn += 1
        if fn > 10:
            return True
    cv2.destroyAllWindows()
    video.release()
    return False


@check_login
def verify(request):
    if request.method == "POST" and request.is_ajax():
        user_id = request.session["login_user"]
        password = request.POST.get('password')
        result = HubuUser.objects.filter(id=user_id).filter(password=password)
        if len(result) > 0:
            request.session.setdefault("verify", "ok")
            res = {
                "code": 1,
                "msg": "验证成功",
            }
        else:
            res = {
                "code": 0,
                "msg": "验证失败，请检查密码后重试",
            }
        return JsonResponse(res, json_dumps_params={'ensure_ascii': False})


def logout(request):
    request.session.flush()
    return redirect('/user/login/')


def login(request):
    if request.method == "GET":
        return render(request, 'user/login.html')
    if request.method == "POST" and request.is_ajax():
        username = request.POST.get('username')
        password = request.POST.get('password')
        sql="SELECT * FROM hubu_users WHERE username=%s AND password=%s"
        result = HubuUser.objects.raw(sql,[username,password])
        print(result)
        user_id = 0
        res = {}
        print(result)
        if len(result) > 0:
            user_id = result[0].id
            print(user_id)
            request.session["login_user"] = user_id
            res = {
                "code": 1,
                "msg": "登陆成功！",
                "user_id": user_id,
            }
        else:
            res = {
                "code": 0,
                "msg": "登陆失败，用户名或密码错误！",
            }
        return JsonResponse(res, json_dumps_params={'ensure_ascii': False})


@check_login
def home(request):
    if request.method == "GET":
        return render(request, 'user/home.html')


@check_login
def info(request):
    if request.method == "GET":
        user_id = request.session["login_user"]
        result = HubuUser.objects.filter(id=user_id)
        res = {
            "code": 1,
            "data": result[0].obj_2_json()
        }
        return JsonResponse(res, json_dumps_params={'ensure_ascii': False})


@transaction.atomic
def register(request):
    if request.method == "GET":
        return render(request, 'user/register.html')
    if request.method == "POST" and request.is_ajax():
        username = request.POST.get('username')
        password = request.POST.get('password')
        nickname = request.POST.get('nickname')
        sid = transaction.savepoint()  # 开启事务
        try:
            result = HubuUser.objects.filter(username=username)
            if len(result) <= 0:
                HubuUser.objects.create(username=username, password=password, nickName=nickname)
                transaction.savepoint_commit(sid)  # 提交
                resp = {
                    "code": 1,
                    "msg": "注册成功！",
                }
            else:
                resp = {
                    "code": 0,
                    "msg": "该账号已注册，请直接登录！",
                }
        except Exception as e:
            transaction.savepoint_rollback(sid)
            print(e)
            resp = {
                "code": 0,
                "msg": "注册失败，未知异常，请检查后重试！",
            }
        return JsonResponse(resp, json_dumps_params={'ensure_ascii': False})


def list(request):
    if request.method == "GET":
        sql = 'select * from hubu_users'
        result = HubuUser.objects.raw(sql)
        users = []
        for i in result:
            user = HubuUser(i.id, i.username, i.password, i.nickName, i.realName, i.sex, i.age, i.avatar, i.className,
                            i.gender, i.description, i.createTime, i.modifyTime)
            users.append(user.obj_2_json())
        res = {
            'code': 1,
            'data': users
        }
        print(res)
        print(users)
        return JsonResponse(res, json_dumps_params={'ensure_ascii': False})


def login_face_check(request):
    if request.method == "POST" and request.is_ajax():
        # 获取base64格式的图片
        faceImage = request.POST.get('faceImg')
        # 提取出base64格式，并进行转换为图片
        index = faceImage.find('base64,')
        base64Str = faceImage[index + 6:]
        img = base64.b64decode(base64Str)
        # 将文件保存
        backupDate = time.strftime("%Y%m%d_%H%M%S")
        if int(request.POST.get('id')) == 0:
            fileName = "data/temp/img_%s_%s.jpg" % (backupDate, random.randint(1, 1000))
        file = open(fileName, 'wb')
        file.write(img)
        file.close()
        idnum, confidence = check_face(fileName)
        print(idnum)
        print(confidence)
        if confidence <= 80  and idnum>0:
            request.session["login_user"]=idnum
            JsonBackInfo = {
                "code": 1,
                "msg": "",
                "user_id": idnum,
                "confidence": confidence,
            }
        else:
            JsonBackInfo = {
                "code": 0,
                "msg": "人脸验证未通过，请重新再试！",
            }
        return JsonResponse(JsonBackInfo)


def check_face(img_path):
    recognizer = cv2.face.LBPHFaceRecognizer_create()
    recognizer.read('data/face_trainer/trainer.yml')
    cascadePath = "data/haarcascade_frontalface_alt.xml"
    faceCascade = cv2.CascadeClassifier(cascadePath)
    idnum = 0
    confidence = 0.0
    img = cv2.imread(img_path)
    img_gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    faces = faceCascade.detectMultiScale(img_gray)
    for (x, y, w, h) in faces:
        cv2.rectangle(img, (x, y), (x + w, y + h), (0, 255, 0), 2)
        idnum, confidence = recognizer.predict(img_gray[y:y + h, x:x + w])
    cv2.destroyAllWindows()
    return idnum, confidence
