const mongoose = require('mongoose');

const DonneesSchema = mongoose.Schema({
    
        lumiere : {
            valeur: {
                type: String, 
                default: '0'},  
        },
        flamme:{
            valeur: {
                type: String, 
                default: '0'},
            
        },
        intensitelum:{
            valeur: {
                type: String, 
                default: '0'},
        },
        auto:{
            valeur: {
                type: String, 
                default: '0'},
        },
        presence:{
            valeur: {
                type: String, 
                default: '0'},
        },
        seuillum:{
            valeur: {
                type: String, 
                default: '0'},
        },
        seuilventilo:{
            valeur: {
                type: String, 
                default: '0'},
        },
        temp:{
            valeur: {
                type: String, 
                default: '0'},
        },
        tempAuto:{
            valeur: {
                type: String, 
                default: '0'},
        },
        tempslum:{
            valeur: {
                type: String, 
                default: '0'},
        },
        ventilo:{
            valeur: {
                type: String, 
                default: '0'},
        },
        ventilospeed:{
            valeur: {
                type: String, 
                default: '0'},
        },
        voletdown:{
            valeur: {
                type: String, 
                default: '0'},
        },
        voletup:{
            valeur: {
                type: String, 
                default: '0'},
        },
   
    date: String

}, {
    timestamps: true
});

module.exports = mongoose.model('DonneesDomo', DonneesSchema);