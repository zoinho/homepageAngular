var express = require('express');
var fs = require('fs');
var cors = require('cors');
var app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
  });

app.listen(3000, ()=> {
    console.log("server is running")
})



app.get('/education', (req, res) => {
    fs.readFile('serverFiles/education.json', (err, resp) => {
        let parsedResp = JSON.parse(resp);
        setTimeout(()=> {
            res.send(parsedResp);
            console.log('Education response sent')
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