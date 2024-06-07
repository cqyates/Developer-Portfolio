const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/corey-connect');
//mongoose.connect('mongodb+srv://cqyates:D3^3FYp45ynJN*F@cluster0.drpsv39.mongodb.net/corey-connect?retryWrites=true&w=majority&appName=Cluster0')
module.exports = mongoose.connection;
