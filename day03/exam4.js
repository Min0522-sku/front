

// [지문1] prompt 함수로 국어 , 영어 , 수학 점수를 각 입력받아서 (각 변수에 저장하고) 총점 과 평균을 계산하여 console탭에 출력하시오.
//let 국어 = parseInt(prompt("국어 : "))
//let 영어 = parseInt(prompt("영어 : "))
//let 수학 = parseInt(prompt("수학 : "))
//console.log("총점 : " + (국어+영어+수학))
//console.log("평균 : "+ (국어+영어+수학)/3)
// [지문2] prompt 함수로 반지름를 입력받아서 원넓이[반지름*반지름*3.14] 계산하여 console탭에 출력하시오
//let r = parseInt(prompt("반지름 : "))
//console.log("원의 넓이 : "+(r*r*3.14))
// [지문3] prompt 함수로 두 실수를 입력받아서 앞 실수의 값이 뒤실수의 값의 비율% 계산하여 console탭에 출력하시오.
//let 실수1 = parseFloat(prompt("실수1 : "))
//let 실수2 = parseFloat(prompt("실수2 : "))
//console.log("비율 : "+(실수1/실수2)*100+"%")


// === 값과 타입이 같다 !== 타입이 같지 않다
// [지문4] prompt 함수로 정수를 입력받아 입력받은 값이 홀수이면 true / 짝수이면 false 로 console탭에 출력하시오.
//let n = parseInt(prompt("정수 : "))
//if ((n%2) == 0) console.log("false") 
    //else console.log("true")

// [지문5] prompt 함수로 정수를 입력받아 입력받은 값이 7의 배수이면 true / 아니면 false 로 console탭에 출력하시오.
//let k = parseInt(prompt("정수2 : "))
//if ((k%7) == 0) console.log("true")
    //else console.log("false")

// [지문6] prompt 함수로 아이디 와 비밀번호를 입력받아서 (입력받은)아이디가 'admin' 이고 (입력받은)비밀번호가 1234 와 일치하면 true / 아니면 false 출력하시오.
//let id = prompt("id를 입력하세요 : ")
//let password = prompt("비밀번호를 입력하세요 : ")
//if (id == 'admin' && password == 1234) console.log("true")
    //else console.log("false")
// [지문7] prompt 함수로 정수를 입력받아 입력받은 값이 홀수 이면서 7배수 이면 true / 아니면 false 로 console탭에 출력하시오.
// let i = parseInt(prompt("정수3 : "))
// if(i%2 !=0 && i%7 ==0) console.log("true")
//     else console.log("false")
// [지문8] 1차점수 와 2차점수 prompt함수로 각 입력받아서 총점이 150점이상이면 '합격' 아니면 '불합격' HTML의 <h3> 에 출력하시오.
// let n1 = parseInt(prompt("1차점수 : "))
// let n2 = parseInt(prompt("2차점수 : "))
// let sum = n1 + n2
// let result = sum >= 150 ? '합격' : '불합격'

// // 삼항연산자 조건 ? 참 : 거짓, 참에는 true 대신 반환할 자료 거짓에는 false 대신 반환할 자료
// // 조건1 ? 참 : 조건2 ? 참 : 조건3 ? 참 : 거짓  이렇게 중첩 가능
// // let result
// // if (sum >= 150) result = '합격'
// //     else result = '불합격'
// document.write(`<h3>${result}</h3>`)
// [지문9] 두 사람의 이름을 prompt함수로 각 입력받아서 만일 이름이 '유재석' 이면 뒤에 (방장) 이라고 이름 뒤에 붙이고 아니면 생략한다.  HTML의 <ol> 에 결과를 출력하시오.
let name1 = prompt(' 이름1 : ')
let name2 = prompt(' 이름2 : ')
name1 += name1 == '유재석' ? '(방장)' : '';
name2 += name2 == '유재석' ? '(방장)' : '';
let result = `<li> ${name1} </li>
              <li> ${name2} </li>`;
document.querySelector(`ol`).innerHTML = result;