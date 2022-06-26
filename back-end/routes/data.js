module.exports = (app) => {
  const data = require("../controllers/data");
  var router = require("express").Router();

  router.post("/", data.create);

  router.get("/", data.findAll);

  app.use("/api/data", router);
};
