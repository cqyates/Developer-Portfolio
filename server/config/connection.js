const mongoose = require('mongoose');
// had to remove the dotenv.config line to force the local host to use the local db.
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/corey-connect');

module.exports = mongoose.connection;
