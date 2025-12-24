//함수 == 기능 == 여로 코드들의 집합
//1. 출력기능/함수
console.log("안녕하세요1")
alert("안녕하세요2")
document.write("<h3> 안녕하세요</h3>")
document.querySelector("h3").innerHTML = "안녕하세요2" //제일 중요함

// 과정최종흐름1 html <----- js(리액트) <---- 자바/파이썬/노드js <--- 데이터 베이스(영구저장된자료)

//2. 입력기능/함수
let 반환값1 = confirm()// 확인 = true, 취소 = false 버튼 제공 알림 둘중 하나 저장
let 반환값2 = prompt() // 입력 상자 제공 알림 , 사용자의 입력값이 저장됨

let 반환값3 = document.querySelector("h3").innerHTML // 호출
// 과정최종흐름2 html -----> js(리액트) ----> 자바/파이썬/노드js ---> 데이터 베이스(영구저장된자료)