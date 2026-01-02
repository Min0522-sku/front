let scores = [85, 92, 78, 65, 95]
let sum = 0
for(let i = 0; i < scores.length; i ++){
    sum += scores[i]
}
console.log(sum)
console.log(sum/5)

let scores2 = [77, 82, 100, 54, 96]
for(let j = 0; j < scores2.length; j++){
    if(scores2[j] == 100){
        console.log(`100점 만점자를 찾았습니다!`)
        break
    }
}

let scores3 = [90, 45, 72, 88, 59, 100]
for(let k = 0; k < scores3.length; k++){
    if(scores3[k] <= 60){
        continue
    }
    console.log(scores3[k])
}

let bloodTypes = ['A', 'B', 'O', 'AB', 'A', 'B', 'A']
let count = 0
for(let n = 0; n < bloodTypes.length; n++){
    if(bloodTypes[n] == 'A'){
        count +=1
    }
}
console.log(count)

let nameArray = ['유재석', '강호동', '신동엽']
let nameScores = [92, 86, 72]
for(let m = 0; m < nameArray.length; m++){
    for(let b = 1; b <= 10; b++){
        if(nameScores[m] >= b*10) {
            nameArray[m] += '●'
        }
        else {nameArray[m] += '○'}
    }
}
console.log(nameArray)