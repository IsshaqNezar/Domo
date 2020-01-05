const mongoose = require('mongoose');

const VoletDownSchema = mongoose.Schema({
    valeur: false,
    
}, {
    timestamps: true
});

module.exports = mongoose.model('DonneeVoletDown', VoletDownSchema);