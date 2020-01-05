const mongoose = require('mongoose');

const VoletStopSchema = mongoose.Schema({
    valeur: false,
    
}, {
    timestamps: true
});

module.exports = mongoose.model('DonneeVoletStop', VoletStopSchema);