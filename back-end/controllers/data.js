const Data = require("../models/data");

exports.create = function (req, res) {
  const data = new Data({
    temperature: req.body.temperature,
    time: req.body.time,
    color: req.body.color,
  });

  data
    .save()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(err.status).send({
        message: err.message || "Error",
      });
    });
};

exports.findAll = (req, res) => {
  Data.find({});
  var total = Data.count();
  Data.find()
    .then((data) => {
      res.set("Access-Control-Expose-Headers", "X-Total-Count");
      res.set("X-Total-Count", total);
      res.json(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error",
      });
    });
};
