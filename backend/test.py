from flask import Flask, request, jsonify
import os
from werkzeug.utils import secure_filename
from keras.models import load_model
from keras.preprocessing import image as image_utils
import matplotlib.image as mpimg
import matplotlib.pyplot as plt

from keras.applications.vgg16 import preprocess_input

model = load_model('bad_apple1.keras')

image_path = r'C:\Users\yukai\Desktop\coding-stuff\personal-projects\OneBadApple\backend\uploaded_image.jpg'

def show_image(image_path):
    image = mpimg.imread(image_path)
    print(image.shape)
    plt.imshow(image)


def execute_predict(image_path):

    show_image(image_path)
    image = image_utils.load_img(image_path, target_size=(224, 224))
    image = image_utils.img_to_array(image)
    image = image.reshape(1, 224, 224, 3)
    image = preprocess_input(image)
    show_image(image_path)

    preds = model.predict(image)

    return preds
