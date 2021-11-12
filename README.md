# youtube project with react 📽

### 👉 [Youtube Project 바로가기](https://wogh002.github.io/youtube-project/ "프로젝트 바로가기")



### Skills 📝

<img alt="HTML5" src ="https://img.shields.io/badge/HTML5-E34F26.svg?&style=for-the-badge&logo=HTML5&logoColor=white"/><img alt="CSS3" src ="https://img.shields.io/badge/CSS3-1572B6.svg?&style=for-the-badge&logo=CSS3&logoColor=white"/>
<img alt="JavaScript" src ="https://img.shields.io/badge/JavaScript-F7DF1E.svg?&style=for-the-badge&logo=JavaScript&logoColor=black"/>
<img alt="React" src ="https://img.shields.io/badge/React-61DAFB.svg?&style=for-the-badge&logo=React&logoColor=black"/>

<img alt="PostCSS" src ="https://img.shields.io/badge/PostCSS-DD3A0A.svg?&style=for-the-badge&logo=PostCSS&logoColor=black"/><img alt="Yarn" src ="https://img.shields.io/badge/Yarn-2C8EBB.svg?&style=for-the-badge&logo=Yarn&logoColor=white"/><img alt="Postman" src ="https://img.shields.io/badge/Postman-FF6C37.svg?&style=for-the-badge&logo=Postman&logoColor=white"/>

![mainpage](https://user-images.githubusercontent.com/79042667/122963803-9365c000-d3c1-11eb-8efe-c720e4826767.png)

### 어떤 프로젝트인가 ❓
* youtube API (channels,search,video api 등 사용) -> postman을 이용하여 api를 관리
* 리액트 훅을 이용한 함수형 프로그래밍
* postCSS 를 이용해 css 를 모듈화 하여 사용
* 서버와의 통신을 위한 Axios 사용
* 모바일에서도 볼 수 있는 반응형웹 구현
* 라이브러리 관리 도구 yarn 을 사용

*****

### 어떤 것을 배웠는가 ❓

#### 1. React 의 내부 메커니즘
* Virtual DOM

  * 브라우저는 html 파일을 한줄 한줄 읽으면서 파싱을 한면서 DOM 요소를 만든다.
  * 그 후 -> Render tree 생성 -> layout-> painting -> composition 단계를 거치게 된다.
  * DOM을 만들때마다 Render Tree 생성부터 layout->... 단계를 거치게 된다.
  * (브라우저가 수행해야하는 레이아웃이 너무 많은 관계로 느리다.) 이로 인해 react는 Virtual dom 을 사용한다.

실제 DOM의 변경사항에 대해서 DOM이 수행해야 할 모든 변경사항을 

virtual dom 에서 수행한 다음 실제 DOM에 전달한다.(계산단계가 줄어드는 것)


DOM 전체를 렌더링 할 필요 없이 실제 DOM에 필요한것만 변경하여 효율을 높힌다.⭐
* * *
* hook 에서는 setState 함수 변경시 해당 컴포넌트가 리렌더링된다.

*props 란 ❓ 부모컴포넌트의 데이터를 하위 컴포넌트로 넘겨주는 값*

하지만 문득 그런 생각이 들었다. 🤔해당 컴포넌트를 다시 렌더를 할 필요가 없는 경우라면 렌더를 하지 않는게 효율적이지 않을까❓
![memo](https://user-images.githubusercontent.com/79042667/123030362-ad34f080-d41d-11eb-8682-3df28967527a.png)

memo 라는 것이 있었다. ⭐




memo 는 해당 컴포넌트의 props (위의 사진에서는 onSearch=props) 는


shouldComponentupdate()를 구현한다 (쉽게 말하면 컴포넌트를 업데이트 해야하는지 말아야하는지)


shollow Comparision을 이용하여 object의 주소값을 검사한다.

object의 주소값이 다르다면 해당 컴포넌트를 리렌더 해주고, 같다면 마지막으로 렌더링된 결과를 재사용한다!

참고 : https://ko.reactjs.org/docs/react-api.html#reactmemo

* * *
#### 2. API KEY를 숨기는 방법
내 API key가 외부로 노출이 될 경우 보안상에 위험이 있지 않을까 ❓ 😱
### WARNING: Do not store any secrets (such as private API keys) in your React app!!


![env](https://user-images.githubusercontent.com/79042667/123034039-c476dc80-d423-11eb-912a-45e3e882de2f.png)

env파일에 변수명과 api키를 넣은 후 사용해주면 되는 간단한 작업이였던 것 같다.

참고 : https://create-react-app.dev/docs/adding-custom-environment-variables

* * *
#### 3. 서버와의 통신을 위한 Axios 사용.

Axios 를 알기전에 동기와 비동기의 개념에 대해 알아야 했었다.😳

동기식 처리란❓
*서버에게 데이터를 요청을 했다고 가정하면, 응답이 올때 까지 기다리는 방식이 동기식 방식이다.*

비동기 방식이란❓
*서버에 데이터를 요청한 이후 서버로부터 데이터가 응답될 때까지 대기하지 않고 즉시 다음 로직을 수행하는것.*



Axios 란 ❓

Promise API를 활용하는 HTTP 비동기 통신 라이브러리

* HTTP 요청과 응답을 JSON 형태로 자동 변경.
* IE까지 대부분의 브라우저를 지원한다. (구형 포함)


![엑시오스](https://user-images.githubusercontent.com/79042667/123042317-97312b00-d431-11eb-88c5-db078a3fae09.png)
![엑시오스2](https://user-images.githubusercontent.com/79042667/123042319-97c9c180-d431-11eb-9379-ee19a58aeb67.png)

* * *

### 프로젝트 후  ❓



검색을 잘하는 것도 개발자가 가져야 하는 스킬 중 하나가 아닐까 싶다.


스스로 고민을 하고 능동적으로 문제를 해결해 나가려 노력만 한다면 어떠한 것이든 만들 수 있다고 생각한다. ✔

감사합니다 😊




















  





