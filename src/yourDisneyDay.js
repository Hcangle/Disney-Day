class YourDisneyDay {

constructor(data) { //same as initialize
 this.ride = data.ride, 
 this.dining = data.dining, 
 this.show = data.show, 
 this.photoop = data.photoop,
 this.shopping = data.shopping

 YourDisneyDay.all.push(this) 


}

static all = []

renderDay()  {
 let list = document.getElementById("yourDisneyList")
 console.log(this)
list.innerHTML+=`<div> 
<p>${this.ride}</p> 
<p>${this.dining}</p> 
<p>${this.show} </p> 
<p>${this.photoop}</p> 
<p>${this.shopping}</p> </div>`
}
}