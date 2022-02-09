// var elForm = document.querySelector(".form")
// var elInput = document.querySelector(".input")
// var elWrapper =document.querySelector("#intro")

// let elPostTemplate = document.querySelector("#post_item_template").content


// function render(data , wrapper) {

//     var Arry = document.createDocumentFragment()
//     data.forEach(datas => {
//         var renderSrt = elPostTemplate.cloneNode(true)
//         renderSrt.querySelector("#name").textContent = datas.name

//         Arry.appendChild(renderSrt)

//         // console.log(Arry);
       
//     });
    
//     wrapper.appendChild(Arry)

//   }

  fetch("http://api.openweathermap.org/geo/1.0/direct?q=andijon&limit=5&appid=3ee90d9304f2206c33a470e72f541f59")
  .then(Response => Response.json())
  .then((data) =>console.log(data))


// elForm.addEventListener('submit', function(evt){
//     evt.preventDefault()
//     var selectInput = elInput.value.trim()
//     console.log(selectInput);
//     // render(data.name)
   
   
  
//   })
// fetch(`http://api.openweathermap.org/geo/1.0/direct?q=andijon&limit=5&appid=3ee90d9304f2206c33a470e72f541f59`)


function getWeather(lat,lng){
  window.location.href="/city.html"
  fetch(`http://api.openweathermap.org/geo/1.0/direct?q=andijon&limit=5&appid=3ee90d9304f2206c33a470e72f541f59`)
  .then(res => res.json())
  .then((data) =>console.log(data))
}

 