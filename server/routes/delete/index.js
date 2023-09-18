const express = require('express');
const router = express.Router();
const { deleteRoom } = require('../../../DAL/rooms.js');

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

module.exports = router;