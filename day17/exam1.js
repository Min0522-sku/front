/*
    interval

    시간적인 간격에 따라 특정 코드/함수 실행
    사용법
    setInterval(함수명, 밀리초)
    주의할점 함수명() 이 아닌 함수명 자체를 넣어야함





*/

let value = 0;
function 증가함수(){
    value +=1;
    const box1 = document.querySelector("#box1");
    box1.innerHTML = value;
}
//setInterval(증가함수, 3000) // 3초마다 '증가함수' 자동 실행


function 시계함수(){
    let today = new Date();
    let hour = today.getHours(); // or new Date().getHours();
    let minute = today.getMinutes();
    let second = today.getSeconds();
    let time = `${hour} : ${minute} : ${second < 10 ? '0'+second : second}`;
    const box2 = document.querySelector("#box2");
    box2.innerHTML = time;
}
setInterval(시계함수, 1000)


let time = 0; // 현재 타이머의 시간 (초)
let timerId; // 인터벌 객체를 저장하는 변수
function timeStart(){
    // 인터벌 실행후 반환된 객체를 대입, 이후 제어(종료)하기 위해서
    timerId = setInterval(시간함수, 1000);
}
function timeStop(){
    clearInterval(timerId); // clearInterval(종료할 인터벌 객체)
}

function 시간함수(){
    time++
    document.querySelector("#box3").innerHTML = time;
}

