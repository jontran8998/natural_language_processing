var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const cors = require('cors')
const dotenv = require('dotenv')
const axios = require('axios')


dotenv.config()

const app = express()

app.use(express.static('dist'))
app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    // res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
const PORT = process.env.PORT || 8081
const HOSTNAME = process.env.HOST || 'localhost'
app.listen(PORT, function () {
    console.log(`Server is running at http://${HOSTNAME}:${PORT}!`)
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

app.post('/meaningCloud', async (req, res) => {
    const api_key = process.env.LICENSE_KEY
    // console.log(api_key);
    // const url = req.body.url
    const link = req.body.url
    console.log(link);
    
    const result = await axios({
        url: `https://api.meaningcloud.com/sentiment-2.1?key=${api_key}&url=${link}&lang=en`
        })
        .then(res => {
            // console.log(res);
            return res
        })
        .catch(err => console.log(err))
    try {
        res.send(result.data)
    } catch (e) {
        console.log(e);
    }
})
