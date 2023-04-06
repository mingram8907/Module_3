const express = require('express');

const app = express();

const PORT = 3000



app.get('/', (req,res) => {
    res.send(`<h1>99 Bottles of beer on the wall</h1><a href='/98'>take one down, pass it around</a>`)
})

app.get('/:number_of_bottles', (req, res) => {
    console.log(req.params);
    console.log(req.query);
    const { number_of_bottles } = req.params

    if(number_of_bottles === '0') {
        res.send(`<h1>You've had more than enough, call an uber!</h1><a href='/'>start over</a>`)
    } else if(number_of_bottles < 0 || number_of_bottles > 99) {
        res.send(`<h1>I bet you're fun at parties</h1><a href= '/'>start over</a>`)
    }
    res.send(`<h1>${number_of_bottles} Bottles of beer on the wall</h1><a href='/${number_of_bottles - 1}'>take one down, pass it around</a>`)
})










app.listen(3000, () => {
    console.log(`Listening to ${PORT}`);
})