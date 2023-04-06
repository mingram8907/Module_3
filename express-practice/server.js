// import/load the express module | require modules
const express = require('express')

// create an instance of the express app
const app = express();

// configure the app (app.set) **not there yet


// mount middleware (app.use) **not there yet


// ===== define our routes directly on app

// root or main route | mount routes
app.get('/', function(req, res) {
    // use the response object to send back some data
    res.send('<h1>Hello Express</h1>')
})

// start to listen for requests | tell the app to listen to port #000
app.listen(3000, function() {
    console.log('Server is running...');
})

/*Practice - Define Another Route (3 mins)
Define another route that matches a get request to a path of /homethat sends a text response of <h1>Home Page</h1>.
Test it by browsing to localhost:3000/home. */

app.get('/home', function(req, res) {
    res.send('<h1>Home Page</h1>')
})

app.get('/cars', function(req, res) {
    res.send("Here's a list of my cars...")
})

app.post('/cars', function(req, res) {
    res.send("Thanks for the new car!")
})

