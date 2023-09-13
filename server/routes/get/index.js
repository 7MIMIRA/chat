const express = require('express');
const router = express.Router();

router.get('/rooms', (_req, res) => {
  res.send("You looking for rooms?");
});

router.get('/messages/:roomId', (req, res) => {
    const { roomId } = req.params;
    res.send(`You requested messages for room ID: ${roomId}`);
});

router.get('/users/:roomId', (req, res) => {
    const { roomId } = req.params;
    res.send(`You requested users for room ID: ${roomId}`);
});

router.get('/user/:userId', (req, res) => {
    const { userId } = req.params;
    res.send(`You requested data for user with an ID of ${userId}`);
});

module.exports = router;