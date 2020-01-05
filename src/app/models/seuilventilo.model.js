const mongoose = require('mongoose');

const SeuilventiloSchema = mongoose.Schema({
    valeur: String,
    
}, {
    timestamps: true
});

module.exports = mongoose.model('DonneeSeuilventilo', SeuilventiloSchema);