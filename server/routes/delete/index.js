const express = require('express');
const router = express.Router();
const { deleteRoom } = require('../../../DAL/rooms.js');

router.delete('/room/:roomName', (req, res) => {
  const { roomName } = req.params;
  deleteRoom(roomName)
    .then(() => {
      res.send(`${roomName} room deleted\n`);
    })
    .catch(() => {
      res.send(`${roomName} delete failed\n`);
    });
});

module.exports = router;