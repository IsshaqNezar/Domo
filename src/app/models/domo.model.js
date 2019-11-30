const mongoose = require('mongoose');

const DomoSchema = mongoose.Schema({
    valeur: String,
    date: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Donnee', DomoSchema);