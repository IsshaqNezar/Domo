const mongoose = require('mongoose');

const LumSchema = mongoose.Schema({
    valeur: String,
    
}, {
    timestamps: true
});

module.exports = mongoose.model('DonneeLum', LumSchema);