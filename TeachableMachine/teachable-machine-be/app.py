from flask import Flask, request, send_file, send_from_directory
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
    print(userId)
    classes = post_data['classes']
    download(userId, classes, 10, 0.2)
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

@app.route('/example/<user_id>', methods=["GET"])
def example(user_id):
    base = f'./data/{user_id}/val/'
    cate = os.listdir(base)[0]
    image = os.listdir(os.path.join(base, cate))[0]
    image_path = os.path.join(base,cate,image)
    return send_file(image_path)


@app.route('/download_model', methods=['GET', 'POST'])
def download_model():
    makezip('example_classifier')
    return send_from_directory(directory='.', path='react_classifier.zip')
