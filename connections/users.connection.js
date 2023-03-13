const express = require("express");
const db = require("../db");

module.exports = {
  getuserdetails: (req, res, next) => {
    let email = req.body.email;
    let sql = "SELECT * from user_info WHERE email = ?";

    db.query(sql, email, (err, result) => {
      if (err) {
        res
          .status(400)
          .send({ status: false, message: "error getting the user data" });
      }

      res.status(200).send({
        status: true,
        message: "successfully got the user data",
        data: result,
      });
    });
  },
  getUsersDetailsById: (req, res, next) => {
    let _id = req.params.id;
    let sql = "SELECT * FROM user_info WHERE id = ?";

    db.query(sql, _id, (err, result) => {
      if (err) {
        res
          .status(400)
          .send({ status: false, message: "error getting the user data" });
      }
      res.status(200).send({ status: true, message: "OK", data: result });
    });
  },
  getAllUsersList: (req, res, next) => {
    let sql = "SELECT * FROM user_info";
    db.query(sql, (err, result) => {
      if (err) {
        res
          .status(400)
          .send({ status: fale, message: "Error getting the list of users" });
      }
      res.status(200).send({ status: 200, message: "OK", data: result });
    });
  },
};
