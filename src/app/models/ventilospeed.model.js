const mongoose = require('mongoose');

const VentiloSpeedSchema = mongoose.Schema({
    valeur: String,
    
}, {
    timestamps: true
});

module.exports = mongoose.model('DonneeVentiloSpeed', VentiloSpeedSchema);