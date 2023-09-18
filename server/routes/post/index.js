const express = require('express');
const router = express.Router();
const { createRoom } = require('../../../DAL/rooms.js');
const { createMessage } = require('../../../DAL/messages.js');

router.post('/message', (req, res) => {
  const { message, roomName } = req.body;
  createMessage(message, roomName)
    .then(() => {
      res.sendStatus(200);
    })
    .catch(error => {
      console.error(error);
      res.sendStatus(500);
    });
});

// router.post('/user', (_req, res) => {
//   res.send("You posted a user");
// });

router.post('/room/:roomName', (req, res) => {
  const { roomName } = req.params;
  createRoom(roomName)
    .then(() => {
      res.sendStatus(200);
    })
    .catch(error => {
      if (error.includes("room already exists")) {
        res.sendStatus(403); // resource already exists
      }
      res.sendStatus(500);
    });
});

module.exports = router;