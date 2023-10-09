var express = require("express");
var router = express.Router();
const { Cart, Borrow } = require("../models");

router.post("/", async (req, res) => {
  const { idCart } = req.body;

  let findIdCart = await Cart.findByPk(idCart);

  if (!findIdCart) {
    return res.status(404).json({
      message: "Informasi cart buku gagal disimpan. Cart not found",
      status: "Failed",
    });
  }

  findIdCart = await Borrow.findAll({
    where: { idCart: idCart },
  });

  if (findIdCart) {
    return res.status(404).json({
      message: "Informasi cart buku gagal disimpan. Cart already exists",
      status: "Failed",
    });
  }

  const borrow = await Borrow.create(req.body);
  res.status(201).json({
    message: "Informasi cart buku berhasil disimpan",
    status: "Success",
    data: borrow,
  });
});

module.exports = router;
