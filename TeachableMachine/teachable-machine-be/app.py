from flask import Flask, request, send_file
from modules import *
from flask_cors import CORS
app = Flask(__name__)
CORS(app)


@app.route('/')
def hello_world():
    return 'Hello, World!'


@app.route('/image_download')
def image_download():
    download("cat", 2, "./data")
    return "download complete"


@app.route('/training', methods=["POST"])
def training():
    # input : userId(string), ClassNames(list)
    # return : success..?

    # 1. Data Receive
    # 2. Download Image datas with google-images-download
    # 2-1 make userId folder
    # 2-2 make train val folder
    # 2-3 locate each class image
    # 3. Training
    # 4. Deploy code??..
    post_data = request.get_json()
    userId = post_data['userId']
    classes = post_data['classes']
    download_data(userId, classes)
    train(userId)
    return "Training Complete"

@app.route('/post_test', methods=["POST"])
def post_test():
    post_data = request.get_json()
    print(post_data)
    return "Maybe Success"

@app.route('/result/<user_id>', methods=['GET'])
def give(user_id):
    file_path = f'./train_result_images/{user_id}.png'
    return send_file(file_path)
