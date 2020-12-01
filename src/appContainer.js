class AppContainer {
   static attractions = [];
   static categories = [];
   url = "http://localhost:3000";
   static yourDisneyDay = {};
   
   bindEventListeners() {
       const btn = document.getElementById('createYourDisneyDay');
       btn.addEventListener('click', () => this.getRandomAttractions())
  
       const newAttractionForm = document.getElementById('newAttraction');
       newAttractionForm.addEventListener('submit', () => this.createAttraction);
    };

    createAttraction(event) {
        event.preventDefault();
        const form = document.getElementById('newAttraction')
        const catIndexSelect = document.getElementById('categorySelect').selectedIndex
        console.log(this)
        fetch(`${this.url}/attractions`, {
          method: 'POST',
          headers: {
              'Content-type': 'application/json',
              'Accept': 'application/json'
          },
          body: JSON.stringify({
               name: "Small World",
               category: "Kids"
          })
        })
        .then(resp => resp.json())
        .then(data => cconsole.log(data))
        .catch(err => console.log(err));
    }

   getRandomAttractions(){
       let randomAttractions = [];
       AppContainer.categories.forEach(category => {
           randomAttractions.push(Attraction.byCategory(category.name)[Math.floor(Math.random()*Attraction.byCategory(category.name).length)]);
       });

       new YourDisneyDay(randomAttractions)
       const yourDisneyDayDiv = document.getElementById('yourDisneyDay');
       AppContainer.yourDisneyDay.attractions.forEach(attraction => {
           const attractionDiv = document.createElement('div');
           attractionDiv.innerText = attraction.name;
           yourDisneyDayDiv.appendChild(attractionDiv);
       })
       
       //need to prevent db from locking when 3 successive delete requests are made.
       //Solutions:
            //setTimeout
            // build special controller action. Fire a single fetch request to our api
            // use another db?
        randomAttractions.forEach(attraction => {
          fetch(`${this.url}/${attraction.id}`, {
             method: 'DELETE'
       })
       .then(resp => resp.json())
       .then(data => console.log(data))
       .catch(err => console.log(err))
       })
}

   getAttractions() {
       // make a fetch request to /attractions
       fetch(this.url + '/attractions')
       .then(resp => resp.json())
       // populate attraction and category properties with the returned data
       .then(data => {
           console.log(data)
           data.forEach(attraction => {
               new Attraction(attraction.id, attraction.name, attraction.category)
               if (!AppContainer.categories.map(category => category.name).includes(attraction.category.name)) {
                   new Category(attraction.category.name)
               }
           });
           // call renderAttractions
           this.renderAttractions();
       })

       .catch(err => alert(err));
   };
   
   renderAttractions() {
       // create DOM nodes and insert data into them to render in the DOM 
   const thrillingSelect = document.getElementById('thrilling');
   const relaxingSelect = document.getElementById('relaxing');
   const kidsSelect = document.getElementById('kids');
   AppContainer.attractions.forEach(attraction => {
       const option = document.createElement('option');
       option.innerText = attraction.name;
       switch(attraction.category.name) {
           case "thrilling":
               thrillingSelect.appendChild(option);
               break;
            case "relaxing":
                relaxingSelect.appendChild(option);
                break;
            case "kids":
                kidsSelect.appendChild(option);
                break;
            default:
       }
   })
    }


}