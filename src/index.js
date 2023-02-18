const cors = require('cors')
const express = require("express");
const { initializeRoutes } = require("./api/routes");
const db = require("./models");
require("dotenv").config();
let app = express();

app.use(
  cors({
    origin: process.env.ALLOWED_ORIGIN
  })
)

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