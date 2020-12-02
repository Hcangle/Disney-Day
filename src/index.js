// const app = new AppContainer
// app.getAttractions()
// app.bindEventListeners()
const categories = [];
const yourDisneyDay = [];
const url = "http://localhost:3000";

// const newAttractionForm = document.getElementById('newAttraction');
// newAttractionForm.addEventListener('submit',createAttraction);
const newYourDisneyDayForm = document.getElementById("yourDisneyDay");
newYourDisneyDayForm.addEventListener('submit',createYourDisneyDay);
getAttractions()

function createYourDisneyDay(e) {
  console.log(e)
  e.preventDefault();

}

// function createAttraction(e) { 
//     console.log(e)
//     e.preventDefault();
//     // const form = document.getElementById('newAttraction')
//     const data = e.target;
//     console.log("insisde event lisenter")
// // POST Request (Create)   
//     fetch(`${url}/attractions`, {
//       method: 'POST',
//       headers: {
//           'Content-type': 'application/json',
//           'Accept': 'application/json'
//       },
//       body: JSON.stringify({
//            name: data.attraction.value,
//            category: data.categorySelect.value
//       })
//     })
//     .then(resp => resp.json())
//     .then(data => {
//         const { id, name, category } = data;
//         new Attraction(id, name, category)
//         renderAttractions()
//     })
//     .catch(err => console.log(err));
// }

// function getRandomAttractions(){
//     let randomAttractions = [];
//     categories.forEach(category => {
//         randomAttractions.push(Attraction.byCategory(category.name)[Math.floor(Math.random()*Attraction.byCategory(category.name).length)]);
//     });

//     new YourDisneyDay(randomAttractions)
//     const yourDisneyDayDiv = document.getElementById('yourDisneyDay');
//     yourDisneyDay.attractions.forEach(attraction => {
//         const attractionDiv = document.createElement('div');
//         attractionDiv.innerText = attraction.name;
//         yourDisneyDayDiv.appendChild(attractionDiv);
//     })
    
 // DELETE Request    
//     randomAttractions.forEach(attraction => {
//        fetch(`${url}/attractions/${attraction.id}`, {
//           method: 'DELETE'
//     })
//     .then(resp => resp.json())
//     .then(data => console.log(data))
//     .catch(err => console.log(err))
//     })
// }

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
        // call renderAttractions
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
console.log("HIT ME")
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

