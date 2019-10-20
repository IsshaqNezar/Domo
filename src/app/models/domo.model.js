const mongoose = require('mongoose');

const DomoSchema = mongoose.Schema({
    valeur: String,
    date: String
}, {
    timestamps: true
});