from flask import Flask
from modules import download
app = Flask(__name__)


@app.route('/')
def hello_world():
    return 'Hello, World!'


@app.route('/image_download')
def image_download():
    download("cat", 2, "./data")
    return "download complete"
