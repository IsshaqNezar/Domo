const mongoose = require('mongoose');

const TempSchema = mongoose.Schema({
    valeur: String,
    date: String
}, {
    timestamps: true
});

module.exports = mongoose.model('DonneeTemp', TempSchema);