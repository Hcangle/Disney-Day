// const app = new AppContainer
// app.getAttractions()
// app.bindEventListeners()

// const newAttractionForm = document.getElementById('newAttraction');
// newAttractionForm.addEventListener('submit',createAttraction);
// const btn = document.getElementById("create YourDisneyDay");
// btn.addEventListener('click',getRandomAttractions);

const baseURL = "http://localhost:3000/"
let currentUser
const userAdapter = new UserAdapter(baseURL)
const categories = [];
const yourDisneyDay = {};
const mainHolder = document.getElementById("main-holder");
// const YourDisneyDayForm = document.getElementById("yourDisneyDay");
// YourDisneyDayForm.addEventListener('submit', createYourDisneyDay) 

const loginForm = document.getElementById("login-form");
document.addEventListener("DOMContentLoaded", init)
// function newUser 
// event listener -> preventdefault
// newUser.nameofthefetchcall
// second function, which will be the  create didney day form
// to save the user info

function init() {
   
    newUser()

}

//create function to call on categories in attractions.js

function disneyCategories(){
    //fetch get index for attractions
    
    byCategory()
}

function newUser() {
    loginForm.addEventListener("submit", (e) => {
    e.preventDefault()
    let info = {
        user: e.target[0].value
    }
        userAdapter.loginUser(info)
     
        
    });
}
    
function newYourDisneyDay(){
    mainHolder.innerHTML= `<div>
    <form id="yourDisneyDay">
            <label for="ride" >Rides</label>
            <select name="" id="ride"></select>
            <label for="dining">Dining</label>
            <select name="" id="dining"></select>
            <label for="show">Shows</label>
            <select name="" id="show"></select>
            <label for="photoop">Photo Ops</label>
            <select name="" id="photoop"></select>
            <label for="shopping">Shopping</label>
            <select name="" id="shopping"></select>
         <button id="createYourDisneyDay" class="btn btn-secondary">Create Your Disney Day!</button>
    
        </form>
    </div>`

    document.getElementById("yourDisneyDay").addEventListener("submit", createYourDisneyDay)
    

}

//create a function that creates a form to create your disney day
//form will have even listener when clocked it calls on createyourdisneyday

 

function createYourDisneyDay(e) {
    e.preventDefault()
  let data = { 
    ride: e.target[0].value,
    dining: e.target[1].value,
    show: e.target[2].value,
    photoop: e.target[3].value,
    shopping: e.target[4].value}
  

  let day = new YourDisneyDay(data) 
  console.log(YourDisneyDay.all)
  day.renderDay()
  
  fetch(this.baseURL+"/disney_days", {
    method: 'POST',
    headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json'
    },
    body: JSON.stringify({
         id: userObj.id, //come back after creating user
         day: data
    })
  })
  .then(resp => resp.json())
  .then(data => {
      const { id, name, category } = data;
      new Attraction(id, name, category)
      renderAttractions()
  })
  .catch(err => console.log(err));
}

function getAttractions() {
    // make a fetch request to /attractions
    fetch(this.baseURL+"/attractions")
    .then(resp => resp.json())
    // populate attraction and category properties with the returned data
    .then(data => {
        data.forEach(attraction => {
            new Attraction(attraction.id, attraction.name, attraction.category)
            if (!categories.map(category => category.name).includes(attraction.category.name)) {
                new Category(attraction.category.name)
            }
        });
        renderAttractions();
    })

    .catch(err => alert(err));
};

function renderAttractions() {
    // create DOM nodes and insert data into them to render in the DOM 
const rideSelect = document.getElementById('ride');
const diningSelect = document.getElementById('dining');
const showSelect = document.getElementById('show');
const photoopSelect = document.getElementById('photoop');
const shoppingSelect = document.getElementById('shopping');
rideSelect.innterHTML = "";
diningSelect.innterHTML = "";
showSelect.innterHTML = "";
photoopSelect.innterHTML = "";
shoppingSelect.innterHTML = "";
Attraction.all.forEach(attraction => {
    
    const option = document.createElement('option');
    option.innerText = attraction.name;
    switch(attraction.category.name) {
        case "ride":
            rideSelect.appendChild(option);
            break;
         case "dining":
             diningSelect.appendChild(option);
             break;
         case "show":
             showSelect.appendChild(option);
             break;
             case "photoop":
             photoopSelect.appendChild(option);
             break;
         case "shopping":
             shoppingSelect.appendChild(option);
             break;
         default:
    }
})
 }





// function(init) {
//     fetch("https://touringplans.com/magic-kingdom/attractions.json")
//     .then(r => r.json())
//     .then(r => {
//         r.forEach(a => {
//             let attractions = new attraction(a)
//             Attractions.dropDown()
//         })
//     })
// }

