const mongoose = require('mongoose');

const SeuilLumSchema = mongoose.Schema({
    valeur: String,
    
}, {
    timestamps: true
});

module.exports = mongoose.model('DonneeSeuilLum', SeuilLumSchema);