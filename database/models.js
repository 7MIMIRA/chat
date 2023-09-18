const mongoose = require('./index.js');

const roomSchema = new mongoose.Schema({
  name: String
});

const messageSchema = new mongoose.Schema({
  roomName: String,
  message: String,
  // TODO: add author data to message
  // author: String
});

const Room = mongoose.model('Room', roomSchema);
const Message = mongoose.model('Message', messageSchema);

module.exports = {
  Room,
  Message
};