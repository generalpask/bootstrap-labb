const express = require('express');
const path = require('path');

const app = express();
const router = express.Router();
app.use('/', router);
app.use(express.static(__dirname + '/public/'));

app.get('/', function(req,res) {
    res.redirect('/index');
});

app.get('/index', function(req,res) {
    res.status(200).sendFile(path.join(__dirname+'/public/views/index.html'));
});

var port = 4400;
app.listen(port, () => console.log("Listening on port " + port));