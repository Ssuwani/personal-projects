from flask import Flask, request,jsonify
from module import check
from flask_cors import CORS
app = Flask(__name__)
app.config['CORS_HEADERS'] = 'Content-Type'
CORS(app, resources={r"/*": {"origins": "*"}})

@app.route('/')
def hello_world():
    return '리뷰 작성 실수 방지 프로젝트엑서 사용되는 API'

@app.route('/review', methods=['POST'])
def review():
    data = request.get_json()
    star = int(data['star'])
    review = data['review']
    # print(star, review)
    result = check(star, review) # return True or False
    print(star, review, result)
    return jsonify(result)