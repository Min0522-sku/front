console.log(document);//현재 js 가 포함하는 html 그자체 <객체표현>

document.write("<h3> 2 내장 객체 함수 실행 </h3>");

let div = document.querySelector("div");
console.log(div)

let box2 = document.querySelector(".box2");
console.log(box2)

let box3 = document.querySelector("#box3");
console.log(box3)

let div2 = document.querySelectorAll("div"); // js 에서 특정한 마크업(들 객체) 배열로 반환함수
console.log(div2)
//  innerHTML 선택된 dom객체내 마크업 사이에 텍스트
let html1 = document.querySelector("#box3").innerHTML // 호출
console.log(html1)
document.querySelector("#box3").innerHTML = "박스3" //대입

// 버튼 클릭시 입력받은 값 가져오는 함수
function func1(){
    let value = document.querySelector(".myInput").value;
    console.log(value +" 입력 했군요.");
    document.querySelector(".myInput").value ="";
}


function func2(){
    document.querySelector(".title").innerHTML = "js에서 정해준 글"
}


function func3(){
    let title2 = document.querySelector(".title2");
    title2.style ="color : red;"
    title2.style.backgroundColor = "blue"// css는 -이 불가능 하므로 카멜표기법

}