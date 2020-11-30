Backend Repo => https://github.com/Hcangle/disney-day-api


disney-day => where git repository is initialized
   README.md => instructions for app
   disney-day-api => rails portion; use rails generator  to make directory
   disney-day-client 
      index.html => single page of app. Loads all of javascript that interacts with API 
      src
         index.js => top-level js file (where the js starts running)
         attractionclass.js
         categoryclass.js
         class3.js
         class4.js

AJAX Requests: 
1. get /attractions
2. delete /attractions/:id 
3. post (create) /attractions

Fixing bugs

The application must be HTML, CSS, and JavaScript frontend with a Rails API baclend. All interactions between the client and the server must be handled asynchromonously (AJAX) and us JSON as the communication format. 

The JavaScript app must us Object Oriented JavaScript (classes) to encapsulate realted data and behavior. 

the domain model served by the Rails backend must include a resource with at least one has-many relationship. 

The backend and frontend must collaboragte to demonstatrate client-server communication. Your app should have atleast 3 AJAX calls, covering minimum 2 of CRUD, Your client-side JavaScript code must use fetch with the appropriate HTTP verb, and your Rails API should use RESTful convention.# Disney-Day
