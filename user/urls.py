from django.urls import path
from .views import login,register,login_face_check,list,home,info,edit,update_face,verify,logout

app_name = "user"
urlpatterns = [
    path('login/', login, name='login'),
    path('register/', register, name='register'),
    path('face_check/', login_face_check, name='login_face_check'),
    path('list/', list, name='list'),
    path('home/', home, name='home'),
    path('info/', info, name='info'),
    path('edit/', edit),
    path('face/', update_face),
    path('verify/', verify),
    path('logout/', logout),

]
