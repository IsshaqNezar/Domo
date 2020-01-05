const mongoose = require('mongoose');

const VentiloSchema = mongoose.Schema({
    valeur: String,
    
}, {
    timestamps: true
});

module.exports = mongoose.model('DonneeVentilo', VentiloSchema);