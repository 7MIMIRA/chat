const mongoose = require('mongoose');

async function connectToMongoDB() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

connectToMongoDB()
  .then(() => console.log("MongoDB Connection Established"))
  .catch(console.log);

module.exports = mongoose;