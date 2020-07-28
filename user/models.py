from django.db import models

# Create your models here.
class HubuUser(models.Model):
    id = models.IntegerField('id', primary_key=True)
    username = models.BigIntegerField('username')
    password = models.CharField('password', max_length=32)
    nickName = models.CharField('nickName', max_length=32)
    realName = models.CharField('realName', max_length=8)
    sex = models.BooleanField('sex')
    birthday=models.DateField('生日')
    englishName=models.CharField('英文名称',max_length=16)
    nation=models.CharField('民族',max_length=16)
    avatar = models.CharField('头像', max_length=255)
    image=models.CharField('全身照',max_length=255)
    phone=models.CharField('电话',max_length=16)
    email=models.CharField('邮箱',max_length=32)
    university=models.CharField('大学',max_length=32)
    profession=models.CharField('专业',max_length=32)
    address=models.CharField('现居城市',max_length=32)
    synopsis=models.CharField('简介',max_length=128)
    description = models.CharField('详细描述', max_length=511)
    # 创建时间 auto_now_add：只有在新增的时候才会生效
    createTime = models.DateTimeField(auto_now_add=True)
    # 修改时间 auto_now： 添加和修改都会改变时间
    modifyTime = models.DateTimeField(auto_now=True)

    def obj_2_json(obj):
        return {
            'id': obj.id,
            'username': obj.username,
            'password': obj.password,
            'nick_name': obj.nickName,
            'real_name': obj.realName,
            'sex': obj.sex,
            'birthday':obj.birthday,
            'english_name':obj.englishName,
            'nation':obj.nation,
            'avatar': obj.avatar,
            'image':obj.image,
            'phone':obj.phone,
            'email':obj.email,
            'university':obj.university,
            'profession':obj.profession,
            'address':obj.address,
            'synopsis':obj.synopsis,
            'description': obj.description,
            'create_time': obj.createTime,
            'modify_time': obj.modifyTime,
        }

    class Meta:
        db_table = 'hubu_users'
