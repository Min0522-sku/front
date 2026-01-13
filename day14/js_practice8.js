function submit(){
    const dateDom = document.querySelector(".date");
    const textDom = document.querySelector(".text");
    const priceDom = document.querySelector(".price")
    const listDom = document.querySelector(".list")

    listDom.innerHTML += `
        <tr>
            <td>${dateDom.value}</td>
            <td>${textDom.value}</td>
            <td>${(Number(priceDom.value)).toLocaleString()}</td>
        </tr>
    
    `;
}


//다른 방법
// 1 메모리 설계
let 목록 = [
    {코드: 1, "날짜": "2025-05-22", "항목": "아메리카노", "금액": 2500 },
    {코드: 2, "날짜": "2025-05-30", "항목": "아샷추", "금액": 3500 },
]; //화면에는 보이지 않지만 내부적으로 각 객체/레코드 식별할수 있는 식별코드를 정의하면 좋다 <중복없는 데이터>

// 2 기능 설계
// 등록 함수
function 등록함수(){
    let dateDom = document.querySelector(".date");
    let date = dateDom.value;
    let textDom= document.querySelector(".text");
    let text = textDom.value;
    let priceDom = document.querySelector(".price");
    let price = priceDom.value;
    //입력받은 값 가져오기
    // document.quertSelector() 이용하여 dom 가져오기
    // .value() 이용해서 dom의 value 값 가져오기

    let code = 목록[목록.length-1].코드+1;
    let obj = {"날짜": date, "항목": text, "금액": price};
    //입력받은 값들을 객체 구성 / 식별코드는 자동부여: 마지막 객체 내 코드의 +1
    // {속성명 : 값, 속성명 : 값}


    목록.push(obj);
    textDom.value = "";
    // (전역) 배열에 저장 + 백엔드 통신
    // 배열면수명.push()

    //즉시 테이블에 반영
    출력함수();

}

function 출력함수(){
    //어디에
    let tableInner =document.querySelector(".tableInner");

    //무엇을
    let html = "";
    for(let i = 0; i <= 목록.length-1; i++){
        let obj = 목록[i];
        html += `
            <tr>
                <td>${obj.날짜}</td>
                <td>${obj.항목}</td>
                <td>${Number(obj.금액).toLocaleString()}원</td>
            </tr>
            `
    }

    //출력
    tableInner.innerHTML = html
}