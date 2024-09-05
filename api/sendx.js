const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();
const Subscribe = require("../lib/sendx");

const apiKey = "MJ215hJU0ZItFLSij6MM"; 

const teamId = "hm7iCLmRlrcA1pNIZyC1Xa"

router.post("/subscribe", (req, res) => {
  console.log('req.body.email', req.body.email);
  Subscribe(apiKey, teamId, req.body.email);
  res.json({
    success: true
  })
});

module.exports = router;
