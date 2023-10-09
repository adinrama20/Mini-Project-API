var express = require("express");
var router = express.Router();
const { User } = require("../models");
const Validator = require("fastest-validator");

const v = new Validator();

router.post("/register", async (req, res) => {
  const schema = {
    name: "string",
    mobile: "string",
    email: "string",
    password: "string",
    address: "string",
  };

  const validate = v.validate(req.body, schema);

  if (validate.length) {
    return res.status(400).json(validate);
  }

  const findEmail = await User.findOne({
    where: { email: req.body.email },
  });

  const findMobile = await User.findOne({
    where: { mobile: req.body.mobile },
  });

  if (findEmail || findMobile) {
    return res.status(400).json({
      message: "Email or mobile already exists",
      status: "Failed",
    });
  }

  const user = await User.create(req.body);
  res.status(201).json({
    message: "User added successfully",
    status: "Success",
    data: user,
  });
});

router.post("/login", async (req, res) => {
  const input = {
    email: "string",
    password: "string",
  };

  const validate = v.validate(req.body, input);

  if (validate.length) {
    return res.status(400).json(validate);
  }

  const findEmail = await User.findOne({
    where: { email: req.body.email },
  });

  const findPassword = await User.findOne({
    where: { password: req.body.password },
  });

  if (findEmail && findPassword) {
    return res.status(200).json({
      message: "Successfully login",
      status: "Success",
    });
  }

  res.status(404).json({
    message: "User not found",
    status: "Failed",
  });
});

module.exports = router;
