const { Room } = require('../database/models.js');

async function createRoom(roomName) {
  const name = roomName.toLowerCase();
  const existingRoom = await Room.findOne({ name });
  
  // only create room if one with the same name doesn't exist
  if (existingRoom) {
    throw new Error(`"${name}" room already exists`);
  }

  const room = new Room({ name });
  await room.save();
}

async function listRooms() {
  return await Room.find();
}

async function deleteRoom(name) {
  await Room.deleteOne({ name });
}

module.exports = {
  createRoom,
  listRooms,
  deleteRoom
};