const memberList = [
    {"no": 1, "id": "qwe", "pw":"1234"},
    {"no": 2, "id": "asdf", "pw":"4567"},
]
localStorage.setItem('memberList', JSON.stringify(memberList));

function signup(){
    const idInput = document.querySelector(".signId");
    const pwInput = document.querySelector(".signPw");


    let no = memberList.length >= 1 ? memberList[memberList.length - 1].no+1 : 1;

    const newMember = {
        'no' : no,
        'id' : idInput.value,
        'pw': pwInput.value
    };
    memberList.push(newMember)
    alert("회원가입 완료")

    localStorage.setItem('memberList', JSON.stringify(memberList));
    idInput.value ="";
    pwInput.value ="";

}

function login(){
    const idInput = document.querySelector(".loginId");
    const pwInput = document.querySelector(".loginPw");

    let loginSuccess = false;

    for(let i = 0; i< memberList.length; i++){
        if(memberList[i].id == idInput.value && memberList[i].pw == pwInput.value){
            loginSuccess = true;
            break;
        }
    }
    if(loginSuccess){
        alert("로그인성공");
    }else{
        alert("로그인 실패");
    }

}