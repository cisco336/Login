var ContactMsg = require('../models/messages');
var config = require('../config/config');

// Add msg
exports.addContactMsg = (req, res) => {
    var msg = req.body;
    ContactMsg.create(msg)
        .then(
            console.log(res.json(req.body)),
            res.status(200).json(req.body)
            )
        .catch((err) => { console.error(err) });
};

// Get (Test)
exports.getContactMsg = (req, res) => {
    ContactMsg.find({})
        .then(
            contactMsg => {
                return res.status(200).json(contactMsg)
            }
        )
        .catch((err) => { console.log(err) })
};