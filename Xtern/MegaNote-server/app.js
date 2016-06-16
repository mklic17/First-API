require('dotenv').load();

var express = require('express');
var db = require('./config/db');
var app = express();

var noteSchema = db.Schema({
  title: String,
  Body_html: String,
  body_text: String,
  updated_at: {type: Date, default: Date.now}
});

var Note = db.model('Note', noteSchema);

app.get('/', function(req, res){
  Note.find().then(function(notes){
    res.json(notes);
  });
});

app.listen(3030, function() {
console.log('DB: ' + process.env.DB_URI);
  console.log('Listening on http://localhost:3030...');
});
