let button = document.querySelector(".list_btn")
let smallList = document.querySelector(".smallList");
let elInput = document.querySelector('.el-input')
console.log(elInput);


function handleBtn(evt) {
  smallList.innerHTML = null

  fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${evt.target.value}&limit=5&appid=901097ccb189ec54b92c24daf7d915e0`)
  .then(res => res.json())
  .then((data) => data.forEach(element => {
    var createSmall = document.createElement("li")
    var createButton = document.createElement("button")

    createButton.textContent = element.name

    createSmall.append(createButton)
    smallList.append(createSmall)
  }))
}
elInput.addEventListener('input', handleBtn)


fetch('http://api.openweathermap.org/geo/1.0/direct?q=${evt.target.value}&limit=5&appid=901097ccb189ec54b92c24daf7d915e0')
.then(res => res.json())












function getWeather(lat,log){
  window.location.href="/city.html"
  fetch(`http://api.openweathermap.org/geo/1.0/direct?q=andijon&limit=5&appid=3ee90d9304f2206c33a470e72f541f59`)
  .then(res => res.json())
  .then((data) =>console.log(data))
}










 