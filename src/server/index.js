const dotenv = require('dotenv');
dotenv.config(); // config for .env

let path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const fetch = require('node-fetch');
const mockAPIResponse = require('./mockAPI.js')

const app = express()

const cors = require('cors');

app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static('dist'))


const baseURL = 'https://api.meaningcloud.com/sentiment-2.1?'
const apiKey = process.env.API_KEY


app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    // res.sendFile(path.resolve('src/client/views/index.html'))
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

app.post('/api', async function(req, res) {
    userInput = req.body.url;

    const apiURL = `${baseURL}key=${apiKey}&url=${userInput}&lang=en`
    const response = await fetch(apiURL)
    const meaningcloudOutput = await response.json()
    res.send(meaningcloudOutput)
})


app.listen(8081, function () {
    console.log('the app is running on port 8081!')
})

