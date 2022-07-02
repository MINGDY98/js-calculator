/*
## 🎯 기능 요구사항


- [ ] 숫자를 클릭하면 계산기 화면에 클릭한 숫자가 표시된다(업데이트된다).
  - [o] 화면에 표시된 숫자가 0일 경우
    - [o] 숫자를 클릭하면 값이 바뀐다.
    - [o] 연산자를 누르면 '숫자를 먼저 입력한 후 연산자를 입력해주세요!' 라는 경고 문구가 뜬다.
  - [ ] 화면에 표시된 숫자가 0이 아닌 경우
    - [ ] 연산자를 누를 경우
      - [ ] 그 연산자가 = 키일 경우
      - [ ] =가 아닐 경우
    - [o] 숫자를 클릭할 경우 계산기 화면 끝으로 숫자가 추가된다.



- [ ] 2개의 숫자에 대해 덧셈이 가능하다.
- [ ] 2개의 숫자에 대해 뺄셈이 가능하다.
- [ ] 2개의 숫자에 대해 곱셈이 가능하다.
- [ ] 2개의 숫자에 대해 나눗셈이 가능하다.
- [ ] AC(All Clear)버튼을 누르면 0으로 초기화 한다.
- [ ] 숫자는 한번에 최대 3자리 수까지 입력 가능하다.
- [ ] 계산 결과를 표현할 때 소수점 이하는 버림한다.

*/

import { $ } from "./utils/dom.js";

function App() {
  this.init = () => {
    console.log("init");
    initEventListeners();
  };
}

const updateScreen = (e) => {
  console.log("updateScreen", e.target.innerText);
  if ($("#total").innerText === "0") {
    // 화면에 표시된 숫자가 0이라면
    $("#total").innerText = e.target.innerText;
  } else {
    //화면에 표시된 숫자가 0이아니라면?
    $("#total").innerText += e.target.innerText;
  }
};

const initEventListeners = () => {
  // 연산자를 눌렀을 경우
  $(".operations").addEventListener("click", (e) => {
    if ($("#total").innerText === "0") {
      alert("숫자를 먼저 입력한 후 연산자를 입력해주세요!");
      return;
    }
  });
  // 숫자를 눌렀을 경우
  $(".digits").addEventListener("click", (e) => {
    if (e.target.classList.contains("digit")) {
      updateScreen(e);
    }
  });
};

const app = new App();
app.init();
