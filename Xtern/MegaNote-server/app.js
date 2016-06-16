require('dotenv').load();

var express = require('express');
var db = require('mongoose');

db.connect(process.env.DB_URI);
var app = express();

var NoteSchema = db.Schema();
var Note = db.model('Note', { title: String });

app.get('/', function(req, res){
  Note.find().then(function(notes){
    res.json(notes);
  });
});

app.listen(3030, function() {
console.log('DB: ' + process.env.DB_URI);
  console.log('Listening on http://localhost:3030...');
});
