// 1. 숫자
100 
console.log(100) // 1) 괄호 안에서 부터 읽는다
console.log(typeof 100) // 2) typeof 자료, 자료형을 알수있음
// 100과 "100" 이 다름 숫자형 문자형
console.log(3.37) //3) 컴퓨터는 소수점을 모름. 부동소수점을 사용

// 2. 문자
console.log( "안녕1" ) // 1) " " 으로 감싼 자료
console.log('안녕2') //2) ' ' 으로 감싼 자료
console.log(`안녕3`) // 3) 백틱` ` 으로 감싼 자료 
// 3. 이스케이프(제어) 문자
console.log("\\안녕4") // \\일때 \ 하나만 출력
console.log("\n 안녕5") // \n  줄바꿈
console.log("\t안녕6") // \t 들여쓰기
console.log("\"안녕\"") // \" 또는\' 일때 ",' 출력
// 4. 템플릿 리터널 : 문자열과 변수/수식/함수 를 조합할때
let 키 = 176
console.log("나의 키 : " + 키) // "문자열" + 변수(숫자) -> 문자
console.log(`나의 키 : ${키}`) // 백틱 `문자열 ${변수명/수식/함수호출}`

// 5. 문자: 한글자, 문자열: 두글자이상 , 문자열은 배열이다.
console.log("안녕하세요".length) // 문자열 길이(문자개수)
console.log("안녕하세요"[1]) // 문자열의 인덱스 위치 출력 

//6. 논리 : 제어문( 조건문/반복문)에서 자주 사용
console.log(true)
console.log(false)

//7. 특수
let var1 // 변수를 선언 할때 초기값을 설정해놓지 않음
console.log(var1) // undefined 변수는 존재하지만 정의되지 않음
let var2 = null // null, 0, "",undefined 다 다름
console.log(var2) /// 변수의 데이터가 유효하지 않는다.

// 8. 배열 : 여러개 자료들을 *순서*있게 저장하는 *자료* 
let ary1 = ['봄', '여름', '가을', '겨울']
// 0번시작, 중간에 삭제되더라도 한칸씩 당겨짐
console.log(ary1[0])
console.log(ary1[4]) // undefined, 4 인덱스는 존재하지않음

// 9. 배열내자료(요소) 수정 : 변수명[수정할인덱스] = 새로운값
ary1[0] = "SPRING"
console.log(ary1[0])
// 10. 배열내자료(요소) 추가 변수명.push(새로운값), 마지막 인덱스 값 뒤로 추가
ary1.push('지드레곤')
console.log(ary1[4])
// 11. 배열내 자료 삭제 : 변수명.splice(삭제할 인덱스, 갯수)
ary1.splice(3, 1)
console.log(ary1)
// 12. 배열내 자료 중간 삽입 :  변수명.splice(삽입할 인덱스, 0, 자료)
ary1.splice(3, 0, '겨울')
console.log(ary1)
// 13. 배열내 자료 값 찾기: 변수명.indexof(찾을값), 찾을값이 존재하면 인덱스 반환 없으면  -1
console.log(ary1.indexOf('지드레곤'))
// 14. 배열내 자료 개수 반환 : 변수명.length
console.log(ary1.length)
console.log(ary1)


// 형 변환 다른 프로그래밍/환경 통신 간의 데이터 변환 다수 발생
let input = prompt("숫자 : ") //prompt 숫자를 입력해도 무조건 문자열로 반환한다.
console.log(typeof input) 
input = input*1 //방법1 string -> number
console.log(typeof input)  
input = Number(input) //방법2
console.log(typeof input) 


console.log(Number("100")) // 문자 -> 숫자
console.log(parseInt("100")) // 문자 -> 숫자
console.log(parseFloat("3.14")) // 문자 -> 숫자
console.log(String(100)) // 숫자 -> 문자
console.log(100+"") // 숫자 -> 문자
console.log(Boolean("true")) // 문자 -> 불리언