const Model = require("../models/pathModel")
const db = require("../db/orm")

exports.save = async(req, res) => {
  try {
      db.sync(function(err) {
        if (err) {res.send(err)}
        Model.create({name: req.body.name, pathToFile: req.body.path }, function(err) {
              if (err) {res.send(err)}
              res.send('Saved')
            });
      })
  }catch (error) {
      return res.send(error.message)
    }
};
exports.load = async(req, res) => {
  try {
    db.sync(function(err) {
      Model.find({ name: req.query.name }, function (err, people) {
          if (err) {
              throw err
          } else {
              res.send(people)
          }
        })
    })
  }catch (error) {
    return res.send(error.message)
  }
};
