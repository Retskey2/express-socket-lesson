const express = require("express");
const { initializeRoutes } = require("./routes");
const db = require("./models");
let app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = 4000;
app = initializeRoutes(app);
  app.get("/", (req, res) => {
    res.status(200).send({
      success: true,
      message: "welcome to the beginning of greatness",
    });
  });
  
  db.sequelize.sync({ force: false }).then(function () {
    app.listen(port, function () {
      console.log("server is successfully running!");
    });
  });