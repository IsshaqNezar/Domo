const mongoose = require('mongoose');

const FlammeSchema = mongoose.Schema({
    valeur: String,
    date: String
}, {
    timestamps: true
});

module.exports = mongoose.model('DonneeFlamme', FlammeSchema);