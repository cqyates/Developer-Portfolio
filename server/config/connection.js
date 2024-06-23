const mongoose = require('mongoose');
// had to remove the dotenv.config line to force the local host to use the local db.
// require("dotenv").config()
// mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/corey-connect');
mongoose.connect("mongodb+srv://cqyates:D3^3FYp45ynJN*F@cluster0.drpsv39.mongodb.net/corey-connect?retryWrites=true&w=majority")
module.exports = mongoose.connection;
