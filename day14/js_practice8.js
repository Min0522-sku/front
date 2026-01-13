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