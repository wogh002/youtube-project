# youtube project with react ๐ฝ

### ๐ [Youtube Project ๋ฐ๋ก๊ฐ๊ธฐ](https://wogh002.github.io/youtube-project/ "ํ๋ก์ ํธ ๋ฐ๋ก๊ฐ๊ธฐ")



### Skills ๐

<img alt="HTML5" src ="https://img.shields.io/badge/HTML5-E34F26.svg?&style=for-the-badge&logo=HTML5&logoColor=white"/><img alt="CSS3" src ="https://img.shields.io/badge/CSS3-1572B6.svg?&style=for-the-badge&logo=CSS3&logoColor=white"/>
<img alt="JavaScript" src ="https://img.shields.io/badge/JavaScript-F7DF1E.svg?&style=for-the-badge&logo=JavaScript&logoColor=black"/>
<img alt="React" src ="https://img.shields.io/badge/React-61DAFB.svg?&style=for-the-badge&logo=React&logoColor=black"/>

<img alt="PostCSS" src ="https://img.shields.io/badge/PostCSS-DD3A0A.svg?&style=for-the-badge&logo=PostCSS&logoColor=black"/><img alt="Yarn" src ="https://img.shields.io/badge/Yarn-2C8EBB.svg?&style=for-the-badge&logo=Yarn&logoColor=white"/><img alt="Postman" src ="https://img.shields.io/badge/Postman-FF6C37.svg?&style=for-the-badge&logo=Postman&logoColor=white"/>

![mainpage](https://user-images.githubusercontent.com/79042667/122963803-9365c000-d3c1-11eb-8efe-c720e4826767.png)

### ์ด๋ค ํ๋ก์ ํธ์ธ๊ฐ โ
* youtube API (channels,search,video api ๋ฑ ์ฌ์ฉ) -> postman์ ์ด์ฉํ์ฌ api๋ฅผ ๊ด๋ฆฌ
* ๋ฆฌ์กํธ ํ์ ์ด์ฉํ ํจ์ํ ํ๋ก๊ทธ๋๋ฐ
* postCSS ๋ฅผ ์ด์ฉํด css ๋ฅผ ๋ชจ๋ํ ํ์ฌ ์ฌ์ฉ
* ์๋ฒ์์ ํต์ ์ ์ํ Axios ์ฌ์ฉ
* ๋ชจ๋ฐ์ผ์์๋ ๋ณผ ์ ์๋ ๋ฐ์ํ์น ๊ตฌํ
* ๋ผ์ด๋ธ๋ฌ๋ฆฌ ๊ด๋ฆฌ ๋๊ตฌ yarn ์ ์ฌ์ฉ

*****

### ์ด๋ค ๊ฒ์ ๋ฐฐ์ ๋๊ฐ โ

#### 1. React ์ ๋ด๋ถ ๋ฉ์ปค๋์ฆ
* Virtual DOM

  * ๋ธ๋ผ์ฐ์ ๋ html ํ์ผ์ ํ์ค ํ์ค ์ฝ์ผ๋ฉด์ ํ์ฑ์ ํ๋ฉด์ DOM ์์๋ฅผ ๋ง๋ ๋ค.
  * ๊ทธ ํ -> Render tree ์์ฑ -> layout-> painting -> composition ๋จ๊ณ๋ฅผ ๊ฑฐ์น๊ฒ ๋๋ค.
  * DOM์ ๋ง๋ค๋๋ง๋ค Render Tree ์์ฑ๋ถํฐ layout->... ๋จ๊ณ๋ฅผ ๊ฑฐ์น๊ฒ ๋๋ค.
  * (๋ธ๋ผ์ฐ์ ๊ฐ ์ํํด์ผํ๋ ๋ ์ด์์์ด ๋๋ฌด ๋ง์ ๊ด๊ณ๋ก ๋๋ฆฌ๋ค.) ์ด๋ก ์ธํด react๋ Virtual dom ์ ์ฌ์ฉํ๋ค.

์ค์  DOM์ ๋ณ๊ฒฝ์ฌํญ์ ๋ํด์ DOM์ด ์ํํด์ผ ํ  ๋ชจ๋  ๋ณ๊ฒฝ์ฌํญ์ 

virtual dom ์์ ์ํํ ๋ค์ ์ค์  DOM์ ์ ๋ฌํ๋ค.(๊ณ์ฐ๋จ๊ณ๊ฐ ์ค์ด๋๋ ๊ฒ)


DOM ์ ์ฒด๋ฅผ ๋ ๋๋ง ํ  ํ์ ์์ด ์ค์  DOM์ ํ์ํ๊ฒ๋ง ๋ณ๊ฒฝํ์ฌ ํจ์จ์ ๋ํ๋ค.โญ
* * *
* hook ์์๋ setState ํจ์ ๋ณ๊ฒฝ์ ํด๋น ์ปดํฌ๋ํธ๊ฐ ๋ฆฌ๋ ๋๋ง๋๋ค.

*props ๋ โ ๋ถ๋ชจ์ปดํฌ๋ํธ์ ๋ฐ์ดํฐ๋ฅผ ํ์ ์ปดํฌ๋ํธ๋ก ๋๊ฒจ์ฃผ๋ ๊ฐ*

ํ์ง๋ง ๋ฌธ๋ ๊ทธ๋ฐ ์๊ฐ์ด ๋ค์๋ค. ๐คํด๋น ์ปดํฌ๋ํธ๋ฅผ ๋ค์ ๋ ๋๋ฅผ ํ  ํ์๊ฐ ์๋ ๊ฒฝ์ฐ๋ผ๋ฉด ๋ ๋๋ฅผ ํ์ง ์๋๊ฒ ํจ์จ์ ์ด์ง ์์๊นโ
![memo](https://user-images.githubusercontent.com/79042667/123030362-ad34f080-d41d-11eb-8682-3df28967527a.png)

memo ๋ผ๋ ๊ฒ์ด ์์๋ค. โญ




memo ๋ ํด๋น ์ปดํฌ๋ํธ์ props (์์ ์ฌ์ง์์๋ onSearch=props) ๋


shouldComponentupdate()๋ฅผ ๊ตฌํํ๋ค (์ฝ๊ฒ ๋งํ๋ฉด ์ปดํฌ๋ํธ๋ฅผ ์๋ฐ์ดํธ ํด์ผํ๋์ง ๋ง์์ผํ๋์ง)


shollow Comparision์ ์ด์ฉํ์ฌ object์ ์ฃผ์๊ฐ์ ๊ฒ์ฌํ๋ค.

object์ ์ฃผ์๊ฐ์ด ๋ค๋ฅด๋ค๋ฉด ํด๋น ์ปดํฌ๋ํธ๋ฅผ ๋ฆฌ๋ ๋ ํด์ฃผ๊ณ , ๊ฐ๋ค๋ฉด ๋ง์ง๋ง์ผ๋ก ๋ ๋๋ง๋ ๊ฒฐ๊ณผ๋ฅผ ์ฌ์ฌ์ฉํ๋ค!

์ฐธ๊ณ  : https://ko.reactjs.org/docs/react-api.html#reactmemo

* * *
#### 2. API KEY๋ฅผ ์จ๊ธฐ๋ ๋ฐฉ๋ฒ
๋ด API key๊ฐ ์ธ๋ถ๋ก ๋ธ์ถ์ด ๋  ๊ฒฝ์ฐ ๋ณด์์์ ์ํ์ด ์์ง ์์๊น โ ๐ฑ
### WARNING: Do not store any secrets (such as private API keys) in your React app!!


![env](https://user-images.githubusercontent.com/79042667/123034039-c476dc80-d423-11eb-912a-45e3e882de2f.png)

envํ์ผ์ ๋ณ์๋ช๊ณผ apiํค๋ฅผ ๋ฃ์ ํ ์ฌ์ฉํด์ฃผ๋ฉด ๋๋ ๊ฐ๋จํ ์์์ด์๋ ๊ฒ ๊ฐ๋ค.

์ฐธ๊ณ  : https://create-react-app.dev/docs/adding-custom-environment-variables

* * *
#### 3. ์๋ฒ์์ ํต์ ์ ์ํ Axios ์ฌ์ฉ.

Axios ๋ฅผ ์๊ธฐ์ ์ ๋๊ธฐ์ ๋น๋๊ธฐ์ ๊ฐ๋์ ๋ํด ์์์ผ ํ์๋ค.๐ณ

๋๊ธฐ์ ์ฒ๋ฆฌ๋โ
*์๋ฒ์๊ฒ ๋ฐ์ดํฐ๋ฅผ ์์ฒญ์ ํ๋ค๊ณ  ๊ฐ์ ํ๋ฉด, ์๋ต์ด ์ฌ๋ ๊น์ง ๊ธฐ๋ค๋ฆฌ๋ ๋ฐฉ์์ด ๋๊ธฐ์ ๋ฐฉ์์ด๋ค.*

๋น๋๊ธฐ ๋ฐฉ์์ด๋โ
*์๋ฒ์ ๋ฐ์ดํฐ๋ฅผ ์์ฒญํ ์ดํ ์๋ฒ๋ก๋ถํฐ ๋ฐ์ดํฐ๊ฐ ์๋ต๋  ๋๊น์ง ๋๊ธฐํ์ง ์๊ณ  ์ฆ์ ๋ค์ ๋ก์ง์ ์ํํ๋๊ฒ.*



Axios ๋ โ

Promise API๋ฅผ ํ์ฉํ๋ HTTP ๋น๋๊ธฐ ํต์  ๋ผ์ด๋ธ๋ฌ๋ฆฌ

* HTTP ์์ฒญ๊ณผ ์๋ต์ JSON ํํ๋ก ์๋ ๋ณ๊ฒฝ.
* IE๊น์ง ๋๋ถ๋ถ์ ๋ธ๋ผ์ฐ์ ๋ฅผ ์ง์ํ๋ค. (๊ตฌํ ํฌํจ)


![์์์ค์ค](https://user-images.githubusercontent.com/79042667/123042317-97312b00-d431-11eb-88c5-db078a3fae09.png)
![์์์ค์ค2](https://user-images.githubusercontent.com/79042667/123042319-97c9c180-d431-11eb-9379-ee19a58aeb67.png)

* * *

### ํ๋ก์ ํธ ํ  โ



๊ฒ์์ ์ํ๋ ๊ฒ๋ ๊ฐ๋ฐ์๊ฐ ๊ฐ์ ธ์ผ ํ๋ ์คํฌ ์ค ํ๋๊ฐ ์๋๊น ์ถ๋ค.


์ค์ค๋ก ๊ณ ๋ฏผ์ ํ๊ณ  ๋ฅ๋์ ์ผ๋ก ๋ฌธ์ ๋ฅผ ํด๊ฒฐํด ๋๊ฐ๋ ค ๋ธ๋ ฅ๋ง ํ๋ค๋ฉด ์ด๋ ํ ๊ฒ์ด๋  ๋ง๋ค ์ ์๋ค๊ณ  ์๊ฐํ๋ค. โ

๊ฐ์ฌํฉ๋๋ค ๐




















  





