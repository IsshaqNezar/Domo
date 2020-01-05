const mongoose = require('mongoose');

const IntensiteLumSchema = mongoose.Schema({
    valeur: String,
    
}, {
    timestamps: true
});

module.exports = mongoose.model('DonneeIntensiteLum', IntensiteLumSchema);