from flask import Flask, request,jsonify
from predict import get_prediction
from flask_cors import CORS
app = Flask(__name__)
CORS(app)

@app.route('/')
def hello_world():
    return 'Hello, World!'

@app.route('/predict', methods=['POST'])
def predict():
    if request.method == 'POST':
        file = request.files['file']
        img_bytes = file.read()
        print("POST!!")
        class_name = get_prediction(image_bytes=img_bytes)
        
        # print(f"classname is {class_name} class_id is {class_id}")
        return jsonify({'class_name': class_name})