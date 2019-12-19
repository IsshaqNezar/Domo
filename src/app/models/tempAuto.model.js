const mongoose = require('mongoose');

const TempAutoSchema = mongoose.Schema({
    valeur: String,
}, {
    timestamps: true
});

module.exports = mongoose.model('DonneeTempAuto', TempAutoSchema);