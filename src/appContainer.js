class AppContainer {
   static attractions = [];
   static categories = [];
   url = "http://localhost:3000";
   static yourDisneyDay = {};
   
   bindEventListeners() {
       const btn = document.getElementById('createYourDisneyDay');
       btn.addEventListener('click', this.getRandomAttractions)
   };

   getRandomAttractions(){
       let randomAttractions = [];
       AppContainer.categories.forEach(category => {
           randomAttractions.push(Attractions.byCategory(category.name)[Math.floor(Math.random()*Attractions.byCategory(category.name).length)]);
       });

       new YourDisneyDay[randomAttractions]
       const yourDisneyDayDiv = document.getElementById('yourDisneyDay');
       AppContainer.yourDisneyDay.attractions.forEach(attraction => {
           attractionDiv.InnerText = attraction.name;
           yourDisneyDayDiv.appendChild(attractionDiv);
       })
       
        randomAttractions.forEach(attraction => {
          fetch(`http://localhost:3000/attractions/${randomAttractions[0].id}`, {
             method: 'DELETE',
             headers: {
                 'Content-type': 'application/json'
             }
       })
       .then(resp => resp.json())
       .then(data => console.log(data))
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
               if (!AppContainer.categories.map(category => category.name).includes(activity.category.name)) {
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