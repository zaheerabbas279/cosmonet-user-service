const express = require("express");
const route = express.Router();
const userController = require("../connections/users.connection");

route.get("/getuserdata", userController.getuserdetails);
route.get("/getAllUsers", userController.getAllUsersList);
route.get("/userDataById/:id", userController.getUsersDetailsById);

module.exports = route;
