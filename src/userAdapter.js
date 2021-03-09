class UserAdapter {
    constructor(url){
    this.baseURL = url
}

loginUser(userObj){
    fetch(this.baseURL+"/users", {
    method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(userObj)
          })
    
          .then(resp => resp.json())
          .then(json => { 
            currentUser = new User(json)
            
            newYourDisneyDay()
          })
        //   .catch(error => {
        //       const newError = document.createElement('h5');
        //       const text = document.createTextNode(`${error.message}`);
        //       newError.appendChild(text);
        //       document.querySelector('main').appendChild(newError)
        //   })
    }
}
