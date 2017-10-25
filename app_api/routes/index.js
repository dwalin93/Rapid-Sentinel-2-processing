/**
 * Created by pglah on 23.10.2017.
 */
var express = require('express');
var app = express.Router();


app.get('/#', function (req, res) {
    res.sendFile(__dirname + '/app/index.html');
});

module.exports = app;