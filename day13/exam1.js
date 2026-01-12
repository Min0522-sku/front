//함수 : 함(상자/공간/블럭) 수(숫자/코드/명령어)
//재사용 하기 위해서 사용  예) 수학(공식),라이브러리/api
function myfunction(){ //함수 시작

} //함수 끝

//함수호출
myfunction();

// 1. 내가만든 함수 function 2. 남이 만든 함수 console.log() alert() prompt()등
// 함수 예시
function mix(과일){
    let 주스 = 과일 + "주스";
    return 주스;
} // 매개변수는 함수가 종료될때 사라진다 <지역변수 특징>
let cup = mix("사과"); // 인자값 전달 
let cup2 = mix("딸기");
let data = "포도"
let cup3 = mix(data)


//매개변수 x 반환값 x
function func1(){
    console.log("func1.exe");
}
func1

//매개변수 o 반환값 x 대표예시 console.log()
function func2(x, y){
    console.log("func2.exe");
}

//매개변수 o 반환값 o 대표적으로 prompt
function func3(x, y){
    console.log("func3.exe");
    return x+y;
}

//매개변수x 반환값 o
function func4(){
    console.log("func4.exe");
    return 10;
}
let result4 = func4();

//지역변수 함수안에서 선언된 (매개) 변수는 밖에서 호출/사용 안된다.

let 전역변수 = "대한민국"
if(true){
    let 지역변수1 = "경기도";
    console.log(지역변수1) // ok
    for(let i =0; i<1; i++){
        let 지역변수2 = "안양시";
    };
    //console.log(지역변수2); // is not defined
};
//console.log(지역변수1); // is not defined

function func5(지역변수3){
    let 지역변수4 = "수원시"
}
func5("안산시")


// 사용 방법
//js 에서 호출 함수명();
alert("js에서 실행");
//html에서 호출 : <마크업명 에벤트속성명 = "함수명()"/>
//onclick: 해당 마크업 클릭 했을때(이벤트/js) 발생