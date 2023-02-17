const { Router } = require("express");
const db = require("../../models");
const userRouter = Router();

userRouter.get("/", async (req, res, next) => {
    const users = await db.User.findAll();
  
    res.status(200).send({
      success: true,
      message: "users successfully retrieved",
      users,
    });
  });

  module.exports = { route: userRouter, name: "user" };