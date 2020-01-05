const mongoose = require('mongoose');

const VoletUpSchema = mongoose.Schema({
    valeur: false,
    
}, {
    timestamps: true
});

module.exports = mongoose.model('DonneeVoletUp', VoletUpSchema);