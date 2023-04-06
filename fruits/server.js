// Require modules
const express = require('express');

// Create the express app
const app = express();

const PORT = 3000


// Data
const fruits = [
    {
        name: 'apple',
        color: 'red',
        readyToEat: true
    },
    {
        name: 'pear',
        color: 'green',
        readyToEat: false
    },
    {
        name: 'banana',
        color: 'yellow',
        readyToEat: true
    }
];



// add show route
app.get('/', (req, res) => {
    res.send('<h1>Hey world</h1>')
})

app.get('/fruits/', (req, res) => {
    // res.send('<h1>Hey world</h1>')
    res.send(fruits);
})

app.get('/fruits/:indexOfFruitsArray', (req, res) => {
    console.log(req.params);
    console.log(fruits[req.params.indexOfFruitsArray]);
    res.send(fruits[req.params.indexOfFruitsArray]);
})






// tell the app to listen to port 3000
app.listen(3000, () => {
    console.log(`Listening to port ${PORT}`);
});