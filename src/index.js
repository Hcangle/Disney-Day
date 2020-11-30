const app = new AppContainer
app.getAttractions()
app.bindEventListeners()

document.addEventListender("DomContentLoaded", init)

function(init) {
    fetch("https://touringplans.com/magic-kingdom/attractions.json")
    .then(r => r.json())
    .then(r => {
        r.forEach(a => {
            let attractions = new attraction(a)
            Attractions.dropDown()
        })
    })
}

