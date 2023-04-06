// Require modules
const express = require('express');

// Create the express app
const app = express();

const PORT = 3000



app.get('/', (req, res) => {
    res.send('<h1>Hey world</h1>')
})

app.get('/greeting', (req, res) => {
    res.send("Hello stranger")
})

app.get('/greeting/:name', (req, res) => {
    console.log(req.params);
    console.log(req.query);
    res.send(`Hey ${req.params.name}. Great seeing you!`)
})




app.get('/tip/:total/:tippercentage', (req, res) => {
    console.log(req.params);
    console.log(req.query);
    const {total, tippercentage} = req.params

    res.send(`Your tip is $${total * (tippercentage / 100)}`)
})


const magic = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]
const randomValue = magic[Math.floor(Math.random() * magic.length)]

app.get('/magic/:question', (req, res) => {
    res.send(`${req.params.question} magic 8ball says:${randomValue}`)
})












// tell the app to listen to port 3000
app.listen(3000, () => {
    console.log(`Listening to port ${PORT}`);
})