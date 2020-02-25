const mongoose = require('mongoose');

const DonneesSchema = mongoose.Schema({
    
        lumiere : {
            valeur: {
                type: String, 
                default: ''},  
        },
        flamme:{
            valeur: {
                type: String, 
                default: ''},
            
        },
        intensitelum:{
            valeur: {
                type: String, 
                default: ''},
        },
        lumiereauto:{
            valeur: {
                type: false, 
                default: false},
        },
        presence:{
            valeur: {
                type: String, 
                default: ''},
        },
        seuillum:{
            valeur: {
                type: String, 
                default: ''},
        },
        seuilventilo:{
            valeur: {
                type: String, 
                default: ''},
        },
        temp:{
            valeur: {
                type: String, 
                default: ''},
        },
        tempAuto:{
            valeur: {
                type: String, 
                default: ''},
        },
        tempslum:{
            valeur: {
                type: String, 
                default: ''},
        },
        ventilo:{
            valeur: {
                type: String, 
                default: ''},
        },
        ventilospeed:{
            valeur: {
                type: String, 
                default: ''},
        },
        voletdown:{
            valeur: {
                type: false, 
                default: false},
        },
        voletup:{
            valeur: {
                type: false, 
                default: false},
        },
   
    date: String

}, {
    timestamps: true
});

module.exports = mongoose.model('DonneesDomo', DonneesSchema);