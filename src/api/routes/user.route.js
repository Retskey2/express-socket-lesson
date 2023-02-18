const { Router } = require("express");
const userRouter = Router();
var UserController = require('../controllers/user.controller')

userRouter.get("/", UserController.getAllUser);

  module.exports = { route: userRouter, path: "user" };