const express = require('express');
const router = express.Router();
const { deleteRoom } = require('../../../DAL/rooms.js');
const { deleteMessagesInRoom } = require('../../../DAL/messages.js');

router.delete('/room/:roomName', (req, res) => {
  const { roomName } = req.params;
  deleteRoom(roomName)
    .then(() => {
      res.sendStatus(200);
    })
    .catch(() => {
      res.sendStatus(500);
    });
});

router.delete('/messages/:roomName', (req, res) => {
  const { roomName } = req.params;
  deleteMessagesInRoom(roomName)
    .then(() => {
      res.sendStatus(200);
    })
    .catch(() => {
      res.sendStatus(500);
    });
});

module.exports = router;