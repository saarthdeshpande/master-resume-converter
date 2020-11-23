const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/resumeBuilder", { useUnifiedTopology: true, useNewUrlParser: true});

mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));