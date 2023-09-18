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
    .catch(error => {
      if (error.includes("room already exists")) {
        res.sendStatus(403); // resource already exists
      }
      res.sendStatus(500);
    });
});

module.exports = router;