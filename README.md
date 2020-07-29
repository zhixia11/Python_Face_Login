## FaceLogin

> 基于Python构建的Web端人脸识别登录demo。

### 前言

#### 简介

本项目为湖北大学2017级软件工程2020暑期实训结业项目，个人暂未发现具体实际用途的方向，仅用于学习Python基础、Django、OpenCV人脸识别基础和PythonWeb开发逻辑等。（咳咳，主要是交作业）

#### 截图

<img src="https://i.loli.net/2020/07/29/WBf2wyjtzcxOZRs.png" alt="主页" style="zoom: 33%;" />

<img src="https://i.loli.net/2020/07/29/l8Qc2kxCuDJSdpr.png" alt="人脸登录" style="zoom:33%;" />

<img src="https://i.loli.net/2020/07/29/r2NRHjgxq6YCGBc.png" alt="人脸录入前的验证" style="zoom:33%;" />

<img src="https://i.loli.net/2020/07/29/MsCQ4OSnuYmkp2z.png" alt="录入人脸" style="zoom:33%;" />



### 组件

必须确保本地环境已安装下列Python库、组件。要求 `Django >= 3.0`  , `opencv-python >= 4.3` ,  其他组件暂未发现版本限制，但建议不低于下列开发环境版本。

##### 项目核心Python库

- `Django  3.0.8`
- `opencv-python 4.3.0.36`
- `numpy 1.19.1`
- `PyMySQL 0.10.0`

##### 其他组件

- `MySQL 8.0.20`

### 运行

运行前首先需要配置settings，进入FaceLogin文件夹，编辑settings.py文件，在87行左右找到DATABASES属性，修改为你的数据库配置，也可以启用默认的sqlite3数据库

然后打开控制台进入项目主目录，进行数据库迁移

```bash
python manage.py makemigrations
python manage.py migrate
```

使用命令行运行

```bash
python manage.py runserver 0.0.0.0:8000
```

或使用PyCharm打开，右上角配置选择django运行

打开浏览器访问 http://127.0.0.1:8000

### 发布

同一局域网内，其他设备通过Web浏览器走http协议即可正常开启视频。在公网中访问，开启视频需要走https协议。【h5限制，除使用https外好像无其他解决办法】

#### 情况一

如果是要部署至服务器上，可使用备案域名并配置Django来开启Django的https。所需要的库有下列三个，中开启组件。

- `pyOpenSSL 19.1.0`
- `Werkzeug 1.0.1`
- `django_extensions 3.0.3`

同时需要在settings.py文件中加上如下两行配置。

```python
INSTALLED_APPS = [
    #...
    'werkzeug_debugger_runserver',
    'django_extensions',
    #...
]
```

#### 情况二

如果是配合其他人调试测试所用，可使用 [mkcert](https://github.com/FiloSottile/mkcert) 自签SSL证书【具体介绍和使用方法可自行Google，很容易找到】，然后配置NGINX做反代，项目无需其他配置，正常运行即可。访问时可能需要在地址前手动加上 `https://`

Nginx核心配置如下，随`mkcert`版本不同，如`ssl_protocols` 之类的配置项可能会有相应的变化，对照其文档填写即可

```bash
server {
        listen       7000 ssl;
        server_name  localhost;

        ssl_certificate      D:\\nginx\\mkcert\\rootCA.pem; #填写你生成的证书路径
        ssl_certificate_key  D:\\nginx\\mkcert\\rootCA-key.pem;#填写你生成的证书秘钥路径
		ssl_protocols TLSv1 TLSv1.1 TLSv1.2; 
        ssl_prefer_server_ciphers on; 
		ssl_ciphers 'ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-AES256-GCM-SHA384:DHE-RSA-AES128-GCM-SHA256:DHE-DSS-AES128-GCM-SHA256:kEDH+AESGCM:ECDHE-RSA-AES128-SHA256:ECDHE-ECDSA-AES128-SHA256:ECDHE-RSA-AES128-SHA:ECDHE-ECDSA-AES128-SHA:ECDHE-RSA-AES256-SHA384:ECDHE-ECDSA-AES256-SHA384:ECDHE-RSA-AES256-SHA:ECDHE-ECDSA-AES256-SHA:DHE-RSA-AES128-SHA256:DHE-RSA-AES128-SHA:DHE-DSS-AES128-SHA256:DHE-RSA-AES256-SHA256:DHE-DSS-AES256-SHA:DHE-RSA-AES256-SHA:AES128-GCM-SHA256:AES256-GCM-SHA384:AES128-SHA256:AES256-SHA256:AES128-SHA:AES256-SHA:AES:CAMELLIA:DES-CBC3-SHA:!aNULL:!eNULL:!EXPORT:!DES:!RC4:!MD5:!PSK:!aECDH:!EDH-DSS-DES-CBC3-SHA:!EDH-RSA-DES-CBC3-SHA:!KRB5-DES-CBC3-SHA';
        ssl_session_cache    shared:SSL:1m;
        ssl_session_timeout  5m;

        location / {
            proxy_pass http://127.0.0.1:8000;
        }
    }
```

个人使用的是第二种方法，配置NGINX做反代后，然后使用内网穿透将端口转发至公网。本人在使用该方法时，Windows端访问时会出现隐私权限错误，这是自签证书导致的，可忽略提示，继续访问即可正常使用。此时浏览器地址栏左侧依旧会出现不安全提示，但能够正常开启并使用摄像头。Mac端访问，Chrome会直接拦截，无法正常访问，Safari会加载显示不完整。Linux端暂未测试。建议统一使用Chrome浏览器访问。暂未测试上述Mac无法访问的情况是否是个例，请自行研究测试。

### 架构

1. 前后端分离（两个页面偷懒使用了两个模板语言变量，分别是主页的登录与否的超链接变化和录入人脸页面的密码检验是否通过的布局变化）
2. 视频/图像的获取在前端，使用h5的获取设备输入流实现，获取后通过ajax提交至后端
3. 登录采用每2s捕获一次照片，然后jpg模式编码转成base64格式字符串，提交至后端，后端再转成jpg格式存储，并进行识别，直到识别成功，就停止录制，然后跳转
4. 人脸录入需要先验证一遍密码保证本人，然后用户手动点击按钮开始录制视频，3s后录制结束，编码为mp4格式，new一个FormData 传递给后端，后端提取出10张含有人脸的照片，并进行学习，如果照片数量不足返回重新录制
5. 受技术限制，暂未实现增量学习，任何一个用户录入人脸提交后，后端都会重新对所有的人脸进行学习（也是个人觉得无实际应用的原因）。

### 其他

> 有疑问 或 代码有错误，请提交 issue。

[ Apache-2.0 License](https://github.com/oxywen/Python_Face_Login/blob/master/LICENSE)

