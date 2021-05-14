# Teachable Machine

구글에서 서비스중인 [TeachbleMachine](https://teachablemachine.withgoogle.com/) 은 손쉽게 머신러닝을 경험할 수 있도록 도와준다. 실제 무거고등학교에서 고등학생을 대상으로 한 AI 교육에서 이 서비스를 사용하여 Model을 다운로드 받고 마스크 유무에 따른 자동문 프로젝트를 진행했다.



 TeachableMachine에서는 최종적으로 Model을 다운로드 할 수 있다. 이는 통해 웹 어플리케이션, 모바일 어플리케이션 등에 적용할 수 있지만 머신러닝 프로젝트에 익숙치 않은 개발자의 입장에서 여러가지 문제에 직면할 수 있다.

1. 모델은 어디에 둬야 하는 걸까?
2. 모델에 입력은 어떤 것을 줘야하지?
3. 모델에 입력을 어떻게 줘야하지?
4. 모델의 출력은 어떠한 형태로 받을 수 있지?
5. 비동기 처리?



다양한 문제들에 쉽게 접근 및 해결하기 위해 데모 코드를 제공하고자 한다.



예상되는 Stack은 다음과 같다.

### Stacks

- PyTorch
- Flask
- bentoml(?)
- React
- Flutter



**2021.05.14**

---

정말 없어보이지만.. 시작이니까!!   

전체적인 레이아웃을 고민해봤는데 Teachable Machine 과 같이 한 페이지에 모든 내용을 볼 수 있다면 그렇게 하는게 낫다고 판단하였다.

대부분의 디자인을 [Material UI](https://material-ui.com/)의 Component를 이용할 생각이다. 아래의 이미지 리스트 또한 material ui의 GridList를 이용하여 손쉽게 구현할 수 있었다. 

**현재 이미지가 보이지 않는이유**

React에서 Static 이미지로 개, 고양이를 보여주려 했으나 어짜피 사용자가 Class명을 변경하면 React에서 이미지를 다운로드 받을 것이 아니기 때문에 의미가 없다고 생각해서 Flask내에서 이미지 url을 생성해서 그걸 보여주는게 낫다고 판단했다. 그래서 지금부터 Flask로 이동



![image-20210514130822119](./teachable-machine-fe/images/20210514_react.png) 

 