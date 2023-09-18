const { Message } = require('../database/models.js');

async function createMessage(message, roomName) {
  const msg = new Message({ message, roomName });
  await msg.save();
}

async function listMessagesInRoom(roomName) {
  return await Message.find({ roomName });
}

// async function listMessagesByAuthor(userName) {
//   return await Message.find({ author: userName });
// }

async function deleteMessagesInRoom(roomName) {
  await Message.deleteMany({ roomName });
}

module.exports = {
  createMessage,
  listMessagesInRoom,
  deleteMessagesInRoom
};