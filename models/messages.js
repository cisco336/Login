var mongoose = require('mongoose');

var MsgSchema = new mongoose.Schema({
    msgDate: String,
    msgBody: String,
    msgType: String,
    msgName: {
        type: String,
        require: true
    },
    msgLastName: {
        type: String,
        require: true
    },
    msgEmail: {
        type: String,
        required: true,
        lowercase: true,
        trim: true
    }
})

module.exports = mongoose.model('ContactMsg', MsgSchema);