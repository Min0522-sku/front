function isAdult(n){
    if(n >= 20){
        return true
    }
    else{
        return false
    }
}
console.log(isAdult(25))
console.log(isAdult(17))

const numbers =[10, 20, 30, 40, 50];
function sumArray(array){
    let sum = 0;
    for(let i = 0; i < array.length; i++){
        sum += array[i];
    }
    return sum
}
console.log(sumArray(numbers))

const words =['apple', 'banana', 'kiwi', 'strawberry'];
function findLongestWord(wordsList){
    let result = ''
    for(let i = 0; i < wordsList.length; i++){
        if(result.length < wordsList[i].length){
            result = wordsList[i]
        }
    }
    return result
}
console.log(findLongestWord(words))

let userScore = 0;
function gainScore(){
    userScore +=10
}
function loseScore(){
    userScore -= 5
}
gainScore()
gainScore()
gainScore()
loseScore()
console.log(userScore)

const students= [
    {name: '김철수', score : 85},
    {name: '이영희', score : 92},
    {name: '박민준', score : 78}
];
function findTopStudent(studentsList){
    let top = 0;
    let topName = ''
    for(let i = 0; i < studentsList.length; i++){
        if(top < studentsList[i].score){
            top = studentsList[i].score
            topName =studentsList[i].name
        }
    }
    return topName
}
console.log(findTopStudent(students))


const products = [
    {name: '노트북', price: 1200000, stock: 5},
    {name: '모니터', price: 350000, stock: 12},
    {name: '키보드', price: 80000, stock: 25}
];

function calculator(x,y,operator){
    if(operator == '+'){
        console.log(x+y)
    }
    else if(operator == '-'){
        console.log(x-y)
    }
}

calculator(1, 10, '+');
calculator(20, 5, '-');


let todoList = ['장보기', '운동하기']
function renderList(){
    let listHtml = '';
    for(let i = 0; i< todoList.length; i++){
        listHtml += `<li>${todoList[i]}</li>`;
    }
    document.getElementById('todo').innerHTML = `<ul>${listHtml}</ul>`;
    
}renderList();



function getTicketPrice(age){
    if(age < 8){
        return "무료"
    }else if(age <= 19){
        return "5000원"
    }else{
        return "10000원"
    }
}
console.log(getTicketPrice(25))