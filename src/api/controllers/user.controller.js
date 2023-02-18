const db = require("../../models");

const getAllUser = async(req, res, next) => {
    const users = await db.User.findAll();
    if(users) {
        res.status(200).send({
            success: true,
            message: "users successfully retrieved",
            users,
        });
    }
    else {
        res.status(404).json({
            message: "Bad request",
        })
    }
}

module.exports = {
    getAllUser
  };