
let button = document.querySelector('.button');
let randomNumber = Math.floor((Math.random() * 10) + 1)
const apiUrl = "https://corebiz.myvtex.com/api/catalog_system/pub/products/search/tablete";
let title = document.querySelector('.title');
let reference = document.querySelector('.reference');


let refId = document.querySelector('.refId');

// button.addEventListener('click', getItem);

function getItem() {
  fetch(apiUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function(data){
      refId.innerText = data[randomNumber].productId
      title.innerText = data[randomNumber].productTitle
      reference.innerText = data[randomNumber].productReference
  })
}

getItem();
