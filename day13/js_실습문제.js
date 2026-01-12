function seyHello(){
    console.log("함수 호출 성공!");
};
seyHello();

function printSum(x, y){
    console.log(x+y)
}
printSum(5 ,10)

function getWelconeMessage(name){
    return `환영합니다 ${name}님!`
}
let result3 = getWelconeMessage("유재석")
console.log(result3)

let counter = 0;
function increaseCount(){
    counter +=1;
};
increaseCount();
increaseCount();
increaseCount();
console.log(counter);

function printNumbers(n){
    for(let i = 1; i <= n; i++ ){
        console.log(i);
    };
};
let userList = [];
function addUser(nickName){
    userList.push(nickName);
}
let 이름 = prompt("이름 입력")
addUser(이름)
console.log(userList)

let fruitList = ["사과", "딸기", "포도"]
function printFruits(list){
    for(let i = 0; i <= list.length-1; i++ ){
        console.log(list[i])
    }
}
printFruits(fruitList)


