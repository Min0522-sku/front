const departments = [ 
    { "dcode": 1,  "departmentName" : "개발팀"}, 
    { "dcode": 2,  "departmentName" : "디자인팀"}, 
    { "dcode": 3,  "departmentName" : "기획팀"}
];
const staff = [
    { "scode": 1, "staffName": "김민준", "staffRank": "선임개발자", "staffImg": "https://placehold.co/100", "dcode": 1 },  
    { "scode": 2, "staffName": "이서연", "staffRank": "수석 디자이너", "staffImg": "https://placehold.co/100", "dcode": 2 }, 
    { "scode": 3, "staffName": "박도윤", "staffRank": "팀장", "staffImg": "https://placehold.co/100", "dcode": 3 }, 
    { "scode": 4, "staffName": "유재석", "staffRank": "대리", "staffImg": "https://dimg.donga.com/wps/SPORTS/IMAGE/2021/09/07/109129807.1.jpg", "dcode": 1 } 
];
const vacationArray = [
    {"vcode": 1, "scode": 1, "vacationStart": "2025-08-04", "vacationEnd": "2025-08-04", "vacationReason" : "병원 진료"}, 
    {"vcode": 2, "scode": 2, "vacationStart": "2025-07-21", "vacationEnd": "2025-07-25", "vacationReason" : "여름 휴가"}
];



//사원 출력 함수
staffPrint()
function staffPrint(){
    const tbody = document.querySelector(".staffTable tbody"); // html id나 클래스에 따라 바꿔야 하는곳
    let html = "";
    for(let i = 0; i<staff.length; i++){ // staff 배열를 순회
        const member = staff[i]; // staff의 객체 하나를 저장
        
        let memberDepartmentName = ""; // 부서명을 가져오기위한 변수
        for(let j = 0; j < departments.length; j++){ // departments 배열을 순회
            if(member.dcode == departments[j].dcode){ // 일치하는 부서명을 찾으면
                memberDepartmentName = departments[j].departmentName; //부서명 저장
                break;
            };
        };

        html += `
            <tr>
                <td> <img src ="${member.staffImg == "" ? "https://placehold.co/100" : member.staffImg}"></td>
                <td>${member.staffName}</td>
                <td>${memberDepartmentName}</td>
                <td>${member.staffRank}</td>
                <td>
                    <button class="update" onclick="staffFix(${member.scode})">수정</button>
                    <button class="delete" onclick="staffDel(${member.scode})">삭제</button>
                </td>
            </tr>
        `;
    };
    tbody.innerHTML = html; // 상단 이름에 맞춰 변경해야 하는곳
};



function staffDel(scode){ // 사원 삭제 함수
    for(let i = 0; i < staff.length; i++){ //staff 배열 순회
        if(scode == staff[i].scode) { // 매개변수로 받은 사원 코드와 배열의 객체 안에 있는 사원 코드와 같으면
            staff.splice(i, 1); // 그 부분 삭제
            break //종료
        }
    }
    staffPrint();// 화면 새로고침
}


function staffFix(scode){ // 사원 수정 함수
    for(let i = 0; i < staff.length; i++){ //staff 배열 순회
        if(scode == staff[i].scode) { // 매개변수로 받은 사원 코드와 배열의 객체 안에 있는 사원 코드와 같으면
            const newStaffName = prompt("수정할 사원명 : "); // 새로운 사원명 받기  
            const newStaffRank = prompt("수정할 직급 : "); // 새로운 직급 받기
            staff[i].staffName = newStaffName; // 기존 사원명위치에 새로운 사원명으로 저장
            staff[i].staffRank = newStaffRank; // 기존 직급 위치에 새로운 직급으로 저장
            break
        };
    };
    staffPrint();
}



// 휴가 목록 출력 함수
vacationPrint()
function vacationPrint(){
    const right_bottomDom = document.querySelector("#right_bottom_inner") // html에 따라 바꿔야 하는곳
    let html = "";
    for(let i = 0; i<vacationArray.length; i++){ // 휴가 배열를 순회
        const vacation = vacationArray[i]; // 휴가의 객체 하나를 저장
        
        let staffName = ""; // 사원명을 가져오기위한 변수
        for(let j = 0; j < staff.length; j++){ // 사원 배열을 순회
            if(vacation.scode == staff[j].scode){ // 일치하는 사원코드을 찾으면
                staffName = staff[j].staffName; //사원명 저장
                break;
            };
        };

        html += `
                <div id="box">
                    <div class="line1">
                        <div>${staffName}</div><button class="vacationDel" onclick="vacationDel(${vacation.vcode})">신청취소</button>
                    </div>
                    <div class="line2">
                        ${vacation.vacationStart}~${vacation.vacationEnd}
                    </div>
                    <div class="line3">
                        ${vacation.vacationReason}
                    </div>
                </div>
        `;
    };
    right_bottomDom.innerHTML = html;
}

//휴가 신청 삭제 함수
function vacationDel(vcode){
    for(let i = 0; i < vacationArray.length; i++){
        if(vcode == vacationArray[i].vcode) {
            vacationArray.splice(i,1);
            break
        }
    }
    vacationPrint();
}






// 휴가 신청 함수
let vcode = 3;
function vacationAdd(){
    const staffDom = document.querySelector(".staffselect");
    const selectName = staffDom.value;
    const startDom = document.querySelector(".startdate")
    const start = startDom.value;
    const endDom = document.querySelector(".enddate");
    const end = endDom.value;
    const reasonDom = document.querySelector(".reason");
    const reason = reasonDom.value; 
    if(selectName == "disabled"){
        alert("사원을 선택하세요!");
        return;
    };
    if(start == "" || end == ""){
        alert("날짜를 입력해 주세요!");
        return;
    };
    if(reason == ""){
        alert("휴가 사유를 적어주세요!");
        return;
    }
    let foundScode = 0; // 찾은 사원코드를 저장할 변수
    for (let i = 0; i < staff.length; i++) {
        if (selectName == staff[i].staffName) {
            foundScode = staff[i].scode; // 이름이 일치하는 사원의 번호를 저장
            break; // 찾았으니 반복문 종료
        }
    }
    vcode +=1
    const obj = {
        "vcode" : vcode,
        "scode" : foundScode,
        "vacationStart" : start,
        "vacationEnd" : end,
        "vacationReason" : reason
    };
    vacationArray.push(obj)
    vacationPrint();
    startDom.value = "";
    endDom.value = "";
    reasonDom.value = "";
}