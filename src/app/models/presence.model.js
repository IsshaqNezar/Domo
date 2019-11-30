const mongoose = require('mongoose');

const PresenceSchema = mongoose.Schema({
    valeur: String,
    date: String
}, {
    timestamps: true
});

module.exports = mongoose.model('DonneePresence', PresenceSchema);