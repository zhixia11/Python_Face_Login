import face_recognition
import numpy as np

def encoding_face(face_img):
    img=face_recognition.load_image_file(face_img)
    encoding = face_recognition.face_encodings(known_image)[0]
    return  encoding.tostring()

known_image = face_recognition.load_image_file("data/user_face/user.2.1.jpg")
unknown_image = face_recognition.load_image_file("data/user_face/img_20200724_150203.jpg")


# print(biden_encoding)
str=biden_encoding.tostring()
print(str)
arr_2 = np.frombuffer(str, dtype=np.float)
# arr_2.shape = (4, 2, 3)
print(type(arr_2))
