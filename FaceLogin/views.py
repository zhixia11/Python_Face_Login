from django.shortcuts import redirect, render

import user


def index(request):
    if request.method == "GET":
        try:
            user_id = request.session["login_user"]
            if user_id == "" or user_id == None or user_id == 0:
                code=0
            else:
                code = 1
        except Exception as e:
            code=0
        if code == 0:
            context={
                "link":"/user/login/",
                "link_name":"登录"
            }
        else:
            context = {
                "link": "/user/home/",
                "link_name": "个人中心"
            }
        return render(request,"index.html",context)