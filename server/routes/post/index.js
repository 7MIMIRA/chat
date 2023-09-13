const express = require('express');
const router = express.Router();

router.post('/user', (_req, res) => {
  res.send("You posted a user");
});

router.post('/message', (_req, res) => {
  res.send("You posted a message");
});

router.post('/room', (_req, res) => {
  res.send("You posted a room");
});

module.exports = router;