const express = require('express')
const bodyParser = require("body-parser")
const ejs = require('ejs')

const app = express()
app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static("public"))

const port = 3000

app.get('/', (req, res) => {
res.render('index');
})

app.get('/vanity', (req, res) => {
    res.render('vanity');
})

app.get('/contact', (req, res) => {
    res.render('contact');
})

app.get('/cart', (req, res) => {
    res.render('cart');
})

app.get('/utility', (req, res) => {
    res.render('utility');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})