let button = document.querySelector(".list_btn")
// const itemBox = document.querySelector('ItemBox');
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







var let = localStorage.getItem("let")
var lon = localStorage.getItem("lon")


      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${let}&lon=${lon}&appid=d333810d973a09b861b11c830ecb267f`
      )
      .then((res) => res.json())
      .then((data =>{ 
          console.log(data)
          elTitle.textContent = data.name
        eltext.textContent = data.main.temp
        eltext2.textContent = data.weather[0].main
        eltext3.textContent = data.wind.speed
        eltext4.textContent = data.wind.deg
    }))
function handleBack() {
    
    console.log(window.location = 'http://127.0.0.1:5500/index.html');
}

elBack.addEventListener('click',handleBack)


// function clickButton(evt){
//   smallList.innerHTML=""
//   fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${evt.target.text}&limit=5&appid=901097ccb189ec54b92c24daf7d915e0`)
//   .then((res) => res.json())
//   .then((data) => data.forEach(value => 
//   }
   
    
//    }) 




function getWeather(lat,log){
  window.location.href="/city.html"
  fetch(`http://api.openweathermap.org/geo/1.0/direct?q=andijon&limit=5&appid=3ee90d9304f2206c33a470e72f541f59`)
  .then(res => res.json())
  .then((data) =>console.log(data))
}







 