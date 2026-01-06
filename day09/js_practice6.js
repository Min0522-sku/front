// let product = { }
// product.제품명 = prompt("제품명 : ")
// product.가격 = prompt("가격 :")
// product.제조사 = prompt("제조사 :")
// console.log(product)


// const members = [
//     {id: 'user1', password: 'pass1', name: '사용자1'}, 
//     {id: 'user2', password: 'pass2', name: '사용자2'},
// ]
// let isin = false
// let inputId = prompt(" id : ")
// let inputPw = prompt("비밀번호:");
// let inputName = prompt("이름:");

// for(let i = 0; i < members.length; i++){
//     if(members[i].id == inputId){
//         isin = true;
//         break;
//     }
// }
// if (isin){
//     console.log("존재하는 아이디입니다.")
// } else{
//     members.push({id: inputId, password: inputPw, name: inputName});
//     console.log(members)
// }

// const scores =[
//     {name: 'A', math: 80, science: 92},
//     {name: 'B', math: 95, science: 88},
//     {name: 'C', math: 76, science: 78}
// ]
// let a = (scores[0].math+scores[1].math+scores[2].math)/3
// console.log(a)

// const products =[
//     {id:1,name:'사과'},
//     {id:2,name:'바나나'},
//     {id:3,name:'포도'},
//     {id:4,name:'딸기'},
// ]

// let found = false;

// for(let i = 0; i < products.length; i++){
//     if(products[i].id ==3){
//         console.log(products[i])
//         found = true;
//         break
//     }
// }
// if(found == false){
//     console.log("상품을 찾을 수 없습니다.")
// }

// const users =[
//     {id:1,name:'유저1',isActive:true},
//     {id:2,name:'유저2',isActive:false},
//     {id:3,name:'유저3',isActive:true},
//     {id:4,name:'유저4',isActive:false},
// ]
// let activeUsers = []
// for(let i = 0; i < users.length; i++){
//     if(users[i].isActive == true){
//         activeUsers.push(users[i])
//     }
// }
// console.log(activeUsers)

// const movies = [
//   { title: '인셉션', director: '크리스토퍼 놀란' },
//   { title: '기생충', director: '봉준호' },
//   { title: '매트릭스', director: '워쇼스키 자매' }
// ];
// let movieTitles = [];
// for (let i = 0; i < movies.length; i++){
//     movieTitles.push({title: movies[i].title});
// }
// console.log(movieTitles);