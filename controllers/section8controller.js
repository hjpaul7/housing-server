const router = require("express").Router();

const Section8 = require("../db").import("../models/section8");

// GET
router.get("/", (req, res) => {
  Section8.findAll({
    where: {},
  })
    .then((sections8) =>
      res.status(200).json({
        sections8: sections8,
      })
    )
    .catch((err) =>
      res.status(500).json({
        error: err,
      })
    );
});

// POST
router.post("/", (req, res) => {
  const section8FromRequest = {
    nameOfHousing: req.body.nameOfHousing,
    price: req.body.price,
    bedrooms: req.body.price,
    address: req.body.address,
    unemploymentVoucher: req.body.unemploymentVoucher,
  };
  Section8.create(section8FromRequest)
    .then((section8) =>
      res.status(200).json({
        section8: section8,
      })
    )
    .catch((err) =>
      res.status(500).json({
        error: err,
      })
    );
});

module.exports = router;
