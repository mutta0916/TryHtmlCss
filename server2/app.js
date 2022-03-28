const express = require('express')
const request = require('request');
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/yadon', (req, res) => {
    //オブジェクト（連想配列）｛｝
    const options = {
        url: 'https://api.adviceslip.com/advice',
        method: 'GET'
    }
    request(options, (error, response, body) => {
        const obj = JSON.parse(body)
        const advice = obj.slip.advice
        console.log(advice);
        const jsonObj = {
            advice: advice,
            yadon: {
                voice: "こんにちは",
                level: "こんにちは"
            },
        }
        res.json(jsonObj)
    })
})

app.get('/yadon/:id', (req, res) => {
    res.send(req.params.id)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
