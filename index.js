var express = require('express');
var app = express();
var fetch = require('node-fetch');

app.get('/', (req,res) => res.send('Hello World!'));

app.get('/buses', async (req,res) => {
    var url = 'https://api-v3.mbta.com/vehicles?filter[route]=1&include=trip';
    var response = await fetch(url);
    var json     = await response.json();
    res.send(json.data);
})

app.listen('8000', () => console.log('Running 8000'));
