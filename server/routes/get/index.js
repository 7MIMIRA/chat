const express = require('express');
const router = express.Router();
const { listRooms } = require('../../../DAL/rooms.js');
const { listMessagesInRoom } = require('../../../DAL/messages.js');

router.get('/rooms', (_req, res) => {
  listRooms()
    .then((data) => {
        res.send(data);
    })
    .catch(error => {
        console.error(error);
        res.sendStatus(500);
    });
});

router.get('/messages/:roomName', (req, res) => {
  const { roomName } = req.params;
  listMessagesInRoom(roomName)
    .then((messages) => {
        res.send(messages);
    })
    .catch(error => {
        console.error(error);
        res.sendStatus(500);
    });
});

// router.get('/users/:roomName', (req, res) => {
//     const { roomName } = req.params;
//     res.send(`You requested users for room ID: ${roomName}`);
// });

// router.get('/user/:userId', (req, res) => {
//     const { userId } = req.params;
//     res.send(`You requested data for user with an ID of ${userId}`);
// });

module.exports = router;