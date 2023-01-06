const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 4000;

var app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));

const listeningInfo =(prt)=>{ console.info(`listening on port ${prt}`);}
app.listen(port,listeningInfo(port))