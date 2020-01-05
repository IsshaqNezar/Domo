const mongoose = require('mongoose');

const TempsLumSchema = mongoose.Schema({
    valeur: String,
    
}, {
    timestamps: true
});

module.exports = mongoose.model('DonneeTempsLum', TempsLumSchema);