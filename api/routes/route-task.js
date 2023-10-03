const db = require('./../database');
const Note = require('./../models/note');
const Task = require('./../models/task');
const Tag =  require('./../models/tag');


exports.createTag = function (req, res) {
    let tag = req.body;
    db.Tag.create(tag, function (err) {
      if (err) {
        res.json({error: err.message});
        return;
      }
      res.json({message: '✅ New tag created.'});
    });
  };

exports.createNote = function (req, res) {
    let note = req.body;
    db.Note.create(note, function (err) {
      if (err) {
        res.json({error: err.message});
        return;
      }
      res.json({message: 'A new memo has been created'});
    });
  };