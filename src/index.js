// const app = new AppContainer
// app.getAttractions()
// app.bindEventListeners()
const categories = [];
const yourDisneyDay = {};
const url = "http://localhost:3000";


const newYourDisneyDayForm = document.getElementById("yourDisneyDay");
newYourDisneyDayForm.addEventListener('submit', createYourDisneyDay);

// const newAttractionForm = document.getElementById('newAttraction');
// newAttractionForm.addEventListener('submit',createAttraction);
// const btn = document.getElementById("create YourDisneyDay");
// btn.addEventListener('click',getRandomAttractions);

getAttractions();
// createYourDisneyDay();

const loginForm = document.getElementById("login-form");


loginForm.addEventListener("submit", (e) => {
    e.preventDefualt()
    const username = loginForm.username.value;
    fetch(`${url}/users`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
             username: username
        })
      })

      .then(resp => resp.json())
      .then(info => { 

          newYourDisneyDayForm.style.display="block"
          // continue from here
          
      })
      
})

// function newYourDisneyDay(){
    
// }


function createYourDisneyDay(e) {
  e.preventDefault();
  let data = { 
    ride: e.target[0].value,
    dining: e.target[1].value,
    show: e.target[2].value,
    photoop: e.target[3].value,
    shopping: e.target[4].value}
  

  let day = new YourDisneyDay(data) //newYourDisneyDay ?
  console.log(YourDisneyDay.all)
  day.renderDay()
  
  fetch(`${url}/disney_days`, {
    method: 'POST',
    headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json'
    },
    body: JSON.stringify({
         user_id: info.user_id, //come back after creating user
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
    fetch(url + '/attractions')
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



// document.addEventListender("DomContentLoaded", init)

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

