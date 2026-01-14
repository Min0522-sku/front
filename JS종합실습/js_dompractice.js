let categoryList = [
    {"ccode": 1, "category": "음료"},
    {"ccode": 2, "category": "과자"},
    ];

let productList = [
    { "pcode": 1, "ccode": 1, "name": '코카콜라', "price": 2000, "img": 'https://placehold.co/100x100/gray/white', "date": '2025-02-13' },
    { "pcode": 2, "ccode": 2, "name": '맛동산', "price": 3500, "img": 'https://placehold.co/100x100/gray/white', "date": '2025-03-13' },
    { "pcode": 3, "ccode": 2, "name": '도리토스', "price": 4000, "img": 'https://placehold.co/100x100/gray/white', "date": '2025-04-13' },
    { "pcode": 4, "ccode": 1, "name": '사이다', "price": 2000, "img": 'https://placehold.co/100x100/gray/white', "date": '2025-05-13' }
];

 

// 1 출력 함수
productPrint()
function productPrint(){
    const tbody = document.querySelector("tbody");

    let html = "";
    for(let i =0; i < productList.length; i++){
        const product = productList[i];
        let category = "";
        for(let i = 0; i < categoryList.length; i++){
            if(product.ccode == categoryList[i].ccode){
                category = categoryList[i].category;
                break
            };
        };
        html += `
            <tr>
                <td><img src="${product.img}"></td>
                <td>${category}</td>
                <td>${product.name}</td>
                <td>${product.price.toLocaleString()}원</td>
                <td>${product.date}</td>
                <td>
                    <button class="del" onclick="productDel(${product.pcode})">삭제</button>
                    <button class="fix" onclick="productFix(${product.pcode})">수정</button>
                </td>
            </tr>
        `;
    };
    tbody.innerHTML = html;

}


// 삭제 함수

function productDel(pcode){
    for(let i=0; i < productList.length; i++){
        if(pcode == productList[i].pcode){
            productList.splice(i, 1);
            break;
        };
    };
    productPrint()
};


//수정 함수
function productFix(pcode){
    for(let i=0; i < productList.length; i++){
        if(pcode == productList[i].pcode){
            const newName = prompt("수정할 상품명 : ");
            const newPrice = prompt("수정할 가격 : ")
            productList[i].name = newName;
            productList[i].price = newPrice;
            break
        };
    };
    productPrint();

};
let pcode =5; // 처음에는 1로 가정하고 샘플 데이터가 존재하면 마지막 코드 +1
//등록 함수
function productAdd(){
    const categoryDom = document.querySelector("#category")
    const category = categoryDom.value;

    const pushNameDom = document.querySelector("#pushName")
    const pushName = pushNameDom.value;

    const pushPriceDom = document.querySelector("#pushPrice")
    const pushPrice = pushPriceDom.value;

    const pushImageDom = document.querySelector("#pushImage")
    const pushImage = pushImageDom.files[0];
    if(category == "disabled"){
        alert("카테고리를 선택하세요!");
        return;
    }
    if(pushName == "" || pushPrice == ""){
        alert("항목을 채워주세요!")
        return;
    }
    const year = new Date().getFullYear();
    const month = new Date().getMonth()+1;
    const day = new Date().getDate(); // getDay 는 현재 요일을 가져옴
    const date = `${year}-${month < 10 ? 0+month : month}-${day < 10 ? 0+day : day}`; //10보다 작은경우 0n을 표현하기 위해 두자리수를 만들기위해

    pcode += 1;
    const obj = {
        "pcode" : pcode,
        // URL.createObjectURL(이미지객체) 이미지 객체를 html주소로 변경
        "img" : pushImage == undefined ? "https://placehold.co/100x100/gray/white" : URL.createObjectURL(pushImage),
        "ccode" : category,
        "name" : pushName,
        "price" : pushPrice,
        "date" : date
    };
    productList.push(obj);
    productPrint();
}













// function render(){
//     const tableBody = document.querySelector("#productTable");
//     let html = '';

//     for(let index = 0; index < 제품목록.length; index++){
//         let p = 제품목록[index];
//         html += `
//             <tr>
//                 <td><img src="${p.img}" onerror="this.src='https://placehold.co/100x100/gray/white'"></td>
//                 <td>${p.category}</td>
//                 <td>${p.name}</td>
//                 <td>${p.price.toLocaleString()}원</td>
//                 <td>${p.date}</td>
//                 <td>
//                     <button class="del" onclick="deleteProduct(${p.id})">삭제</button>
//                     <button class="fix" onclick="updateProduct(${p.id})">수정</button>
//                 </td>
//             </tr>
//         `;
//     }
//     tableBody.innerHTML =html;
// }
// render();

// function 등록함수(){
//     const category = document.querySelector('#category').value;
//     const name = document.querySelector('#pushName').value;
//     const price = document.querySelector('#pushPrice').value;
//     const imgInput = document.querySelector('#pushImage');
//     const now = new Date();
//     const date = now.toISOString().split('T')[0];
//     const id = 제품목록.length > 0 ? 제품목록[제품목록.length-1].id + 1 : 1;
//     const img = imgInput.files[0] ? imgInput.files[0].name : '';

//     const newProduct = {
//         id: id,
//         category: category,
//         name: name,
//         price: Number(price),
//         img: img,
//         date: date
//     };
//     제품목록.push(newProduct);
//     render();
//     document.querySelector('#pushName').value = "";
//     document.querySelector('#pushPrice').value = "";
//     document.querySelector('#pushImage').value = "";
// }   