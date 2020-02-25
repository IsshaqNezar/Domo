const mongoose = require('mongoose');

const DonneesSchema = mongoose.Schema({
    
        lumiere : {
            valeur: String,
            date: String    
        },
        flamme:{
            valeur: String,
            date: String
            
        },
        intensitelum:{
            valeur: String,
        },
        lumiereauto:{
            valeur: false,
        },
        presence:{
            valeur: String,
        },
        seuillum:{
            valeur: String,
        },
        seuilventilo:{
            valeur: String,
        },
        temp:{
            valeur: {
                type: String, 
                default: ''},
        },
        tempAuto:{
            valeur: String,
        },
        tempslum:{
            valeur: String,
        },
        ventilo:{
            valeur: String,
        },
        ventilospeed:{
            valeur: String,
        },
        voletdown:{
            valeur: false,
        },
        voletup:{
            valeur: false,
        },
   
    date: String

}, {
    timestamps: true
});

module.exports = mongoose.model('DonneesDomo', DonneesSchema);