let numbers = [23, 5, 67, 12, 88, 34]
let result = 0
for(let i=0; i <= numbers.length; i++){
    if(result <= numbers[i]){
        result = numbers[i]
    }
}
console.log(result)

for(let j = 5; j >0; j--){
    console.log('*'.repeat(j))
}

let userNames = ['김하준', '이서아', '박솔민', '최도윤']
for(let i=0; i <userNames.length; i++){
    for(let j=0; j < userNames[i].length; j++){
        if(userNames[i][j] == '솔'){
            console.log(userNames[i])
            break
        }
    }
}

let seatLayout = [['A1', 'A2', 'A3'], ['B1', 'B2', 'B3'], ['C1', 'C2', 'C3']]

for(let i =0; i < seatLayout.length; i++){
    for(let j = 0; j < seatLayout[i].length; j++){
        console.log(seatLayout[i][j])
    }
}

let n = [1, 5, 2, 3, 5, 1, 4, 2]
let new_n = []
for(let i = 0; i < n.length; i++){
    if(new_n.indexOf(n[i])==-1){
        new_n.push(n[i])
    }
}
console.log(new_n)

let num = [5, 3, 4, 1, 2]
for(let i=0; i < num.length; i++){
    for(let j = 0; j < num.length; j++){
        if(num[j] > num[j+1]){
            let temp = num[j]
            num[j] = num[j+1]
            num[j+1] = temp
        }
    }
}
console.log(num)

let products = ['볼펜', '지우개', '노트']
let stock = [10, 20, 5]
let buy = prompt("구매할 상품명 :")
let buy_num = parseInt(prompt("구매할 수량 :"))
for(let i = 0; i < products.length; i++){
    if(buy == products[i] && buy_num <= stock[i]){
        console.log("구매완료!")
        stock[i] -= buy_num
        break
    }
    else if( buy == products[i] && buy_num > stock[i]){
        console.log("재고가  부족합니다.")
        break
    }
}

let movieNames = ['히든페이스', '위키드', '글래디에이터2', '청설']
let movieRatings = [8,4,7,6]
for(let m = 0; m < movieNames.length; m++){
    for(let b = 1; b <= 10; b++){
        if(movieRatings[m] >= b) {
            movieNames[m] += '●'
        }
        else {movieNames[m] += '○'}
    }
    console.log(movieNames[m])
}

let seatStatus = ['빈좌석', '예약석', '예약석', '빈좌석', '예약석', '빈좌석']

let carNumbers = ['210어7125', '142가7415', '888호8888', '931나8234']
let usageMinutes = [65,30,140,420]

for(let i = 0; i < carNumbers.length; i++){
    let time = usageMinutes[i]
    let money = 0;
    if(time <= 30){
        money = 1000;
    }
    else{
        let extraTime = time -30;
        let extraMoney = parseInt(extraTime/10) * 500
        money = 1000 + extraMoney
    }

    if(money > 20000){
        money = 20000
    }
    console.log(`${carNumbers[i]}: ${time}분 주차, 최종 요금: ${money}원`)
}