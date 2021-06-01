### 1. 서비스 명

리뷰  작성 실수 방지

### 2. 목적

컨텐츠를 소비한 소비자가 컨텐츠를 평가하는 행위를 리뷰라고 한다. 리뷰는 컨텐츠에 많은 영향을 미친다. 리뷰는 현재 배달 서비스에서 더욱 중요하게 자리매김하고 있다. 리뷰를 하면 서비스를 주는 행위가 그를 증명한다. 이렇게 중요한 리뷰는 별점과 의견으로 이루어지는 데 실수로 별점을 주는 경우가 비밀비재하다. 이 문제를 해결해보자.

### 3. 구현 방법

- Huggingface에서 제공하는 감정분석(sentiment-analysis)
- React
- Flask

### 4. 서비스 List

- [x]  리뷰를 작성할 수 있는 페이지가 메인화면에 나온다
- [x]  별점을 클릭하고 의견을 적고 제출을 누르면 모델이 별점과 의견이 일관적인지 판단한다.
- [x]  문제가 있다면 다시 확인할 수 있는 알림창을 띄운다.
- [x]  문제가 없다면 처리한다.

### 5. 예상 결과물

React로 구성된 페이지와 sentiment-analysis를 할 수 있는 서버로 구성한다. 서버는 Request를 받아 Reponse한다.

### Demo

![demo](demo.gif)

참고한 사이트

- [bert-naver-movie-review](https://github.com/deepseasw/bert-naver-movie-review)


### Requirements
- flask
- flask_cors
- torch
- transformers
- scitkit-learn

### Usage

파이썬 환경 구성 후

```bash
flask run &
npm i
num start
```

### PreTrained

[GoogleDrive](https://drive.google.com/file/d/1-VvXo1dyAhoT-XYEPzS5yN4_GF7XbypK/view?usp=sharing)