let data = localStorage.getItem('data');
function createProduct(name, count, price, url){
    let blockProd = document.createElement('div');
    blockProd.style.display = 'flex';
    blockProd.style.flexDirection = 'column';
    blockProd.style.alignItems = 'center';
    let pName = document.createElement('div');
    pName.style.width = '30%';
    pName.style.padding = '10px 20px';
    pName.textContent = name;
    blockProd.appendChild(pName);
    let pCount = document.createElement('div');
    pCount.style.width = '30%';
    pCount.style.padding = '10px 20px';
    pCount.textContent = count;
    blockProd.appendChild(pCount);
    let pPrice = document.createElement('div');
    pPrice.style.width = '30%';
    pPrice.style.padding = '10px 20px';
    pPrice.textContent = price;
    blockProd.appendChild(pPrice);
    let prodImage = document.createElement('img');
    prodImage.style.marginLeft = '-370px';
    prodImage.src = url;
    prodImage.style.height = '80px';
    blockProd.appendChild(prodImage);
    let remButton = document.createElement("button");
    remButton.textContent = 'Remove';
    remButton.addEventListener('click',function (){
        let data = JSON.parse(localStorage.getItem('data'));
        for (let i = 0; i < data.length; i++) {
            if (pName.textContent === data[i]['name']){
                data.splice(i,1);
            }
        }
        localStorage.setItem('data',JSON.stringify(data));
       this.parentElement.style.display = 'none';
    });
    blockProd.appendChild(remButton);
    return(blockProd);
}

for (const item of JSON.parse(data)){
    document.body.appendChild(createProduct(item['name'], item['count'], item['price'], item['url']));
    const remAll = document.getElementById('remAll');
    remAll.onclick = function (){
        localStorage.removeItem('data');
        document.location.reload();
    }
}