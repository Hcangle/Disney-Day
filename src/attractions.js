class Attractions {
//    constructor(id, name, category){
//         this.name = name;
//         this.category = category;
//         this.id = id;
//         AppContainer.attractions.push(this);
//     }

//     static byCategory(categoryName) {
//         return AppContainer.attractions.filter(attraction => attraction.category.name === categoryName)
//     }
    constructor(obj) {
        this.name = obj.name 
        this.permalink = obj.permalink
        Attraction.call.push(this)
    }
   static all = [];

    static dropDown() {
         // create a select tag then iterate over ATTRACTIONS.all to create an option tag for each attraction
    }
}