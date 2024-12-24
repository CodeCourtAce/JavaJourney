
const mongoose = require('mongoose');

// temporary connection to local database
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/coffee-regions', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});

module.exports = mongoose.connection;