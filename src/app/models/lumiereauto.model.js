const mongoose = require('mongoose');

const LumautoSchema = mongoose.Schema({
    valeur: String,
}, {
    timestamps: true
});

module.exports = mongoose.model('DonneeLumauto', LumautoSchema);