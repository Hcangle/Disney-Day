class Attraction {
   constructor(id, name, category){
        this.name = name;
        this.category = category;
        this.id = id;
        Attraction.all.push(this);
    }

    static byCategory(categoryName) {
        return Attraction.all.filter(attraction => attraction.category.name === categoryName)
    }

    static all = []
    
}

//     constructor(obj) {
//         this.name = obj.name 
//         this.permalink = obj.permalink
//         Attraction.call.push(this)
//     }
//    static all = [];

//     static dropDown() {
//          // create a select tag then iterate over ATTRACTIONS.all to create an option tag for each attraction
//     }
// }