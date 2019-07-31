
let button = document.querySelector('#button');
let title = document.querySelector('.title');
let code = document.querySelector('.code');
let link = document.querySelector('.link');

function getInfo() {
  let randomNumber = Math.floor((Math.random() * 88) + 1)
  let apiUrl = "https://corebiz.myvtex.com/api/catalog_system/pub/products/search/tablete";
  axios.get(apiUrl).then(function(response){
    updateInfo(response.data)
  })
}

function updateInfo(data){
  title.innerText = data.productName
}

button.addEventListener('click', getInfo);
