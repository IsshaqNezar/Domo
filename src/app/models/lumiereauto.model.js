const mongoose = require('mongoose');

const LumautoSchema = mongoose.Schema({
    valeur: false,
}, {
    timestamps: true
});

module.exports = mongoose.model('DonneeLumauto', LumautoSchema);