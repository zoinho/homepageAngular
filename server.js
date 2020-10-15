var express = require('express');
var fs = require('fs');
var app = express();

app.listen(3000, ()=> {
    console.log("server is running")
})



app.get('/education', (req, res) => {
    fs.readFile('serverFiles/education.json', (err, resp) => {
        let parsedResp = JSON.parse(resp);
        setTimeout(()=> {
            res.send(parsedResp);
        }, 1000)
    })
})
app.get('/skills', (req, res) => {
    fs.readFile('serverFiles/skills.json', (err, resp) => {
        let parsedResp = JSON.parse(resp);
        setTimeout(()=> {
            res.send(parsedResp);
        }, 1000)
    })
})
app.get('/hobbies', (req, res) => {
    fs.readFile('serverFiles/hobbies.json', (err, resp) => {
        let parsedResp = JSON.parse(resp);
        setTimeout(()=> {
            res.send(parsedResp);
        }, 1000)
    })
})
app.get('/experience', (req, res) => {
    fs.readFile('serverFiles/experience.json', (err, resp) => {
        let parsedResp = JSON.parse(resp);
        setTimeout(()=> {
            res.send(parsedResp);
        }, 1000)
    })
})