//다른 js 파일에서 변수/함수 사용 가능
console.log(var1);
func1();



//웹 스토리지 :  
/* 1. 브라우저 f12 application -> 왼쪽 사이드바 메뉴
    로컬 저장소/세션저장소 

    sessionStorage : 세션 저장소를 관리하는 객체
    모든 브라우저가 종료되면 자료가 자동 삭제
    서로 다른 html 끼리 공유 x

    localStorage : 로컬 저장소를 객체
    모든 브라우저가 종료 되더라도 자료 유지    <사용자가 직접 삭제>
    서로 다른 html 끼리 공유                
   
    2. 주요 기능/함수
    .setItem('key', value) 
    .getItem('key')
    .removeItem('key')


    3. JSON 변환
    JSON.stringify() : js 객체 -> 문자열
    JSON.parse() 문자열 -> js 객체
    */
console.log(sessionStorage);
console.log(localStorage);

//저장
sessionStorage.setItem('name', "유재석");
localStorage.setItem('age', 40);



//호출
console.log(localStorage.getItem('age'));
console.log(sessionStorage.getItem('name'));
//삭제
localStorage.removeItem('name');
sessionStorage.removeItem('age');
//세션과 로컬 저장소는 문자열 만 저장 가능하다.  -> 배열/객체를 문자열로 변환해야함 *** JSON : 자바 스크립트 객체 기반의 문자열 형식 ***

sessionStorage.setItem('회원목록', JSON.stringify([{"name": "유재석", "age": 40},{"name":"강호동", "age": 50}]));

console.log(JSON.parse(sessionStorage.getItem('회원목록')))