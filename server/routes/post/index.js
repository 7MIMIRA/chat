const express = require('express');
const router = express.Router();
const { createRoom } = require('../../../DAL/rooms.js');

router.post('/message', (_req, res) => {
  res.send("You posted a message");
});

// router.post('/user', (_req, res) => {
//   res.send("You posted a user");
// });

router.post('/room/:roomName', (req, res) => {
  const { roomName } = req.params;
  createRoom(roomName)
    .then(() => {
      res.send(`${roomName} room created\n`);
    })
    .catch(() => {
      res.send(`${roomName} create failed\n`);
    });
});

module.exports = router;