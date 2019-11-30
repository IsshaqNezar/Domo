const mongoose = require('mongoose');

const LumSchema = mongoose.Schema({
    valeur: String,
    date: String
}, {
    timestamps: true
});

module.exports = mongoose.model('DonneeLum', LumSchema);