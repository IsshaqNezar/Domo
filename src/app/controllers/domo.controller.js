const Donnee = require('../models/domo.model.js');


// Créer et stocker une nouvelle donnée de température
exports.create = (req, res) => {

    //Valider la requête
    if(!req.body.valeur) {
        return res.status(400).send({
            message: "Il faut une donnée"   
        });
    }

//Créer la donnée de température
const donneetemp = new Donnee({
    valeur: req.body.valeur || "Pas de valeur",
    date: req.body.date
});

//Stocker la donnée dans la DB
donneetemp.save()
.then(data => {
    res.send(data);
}).catch(err => {
    res.status(500).send({
        message: err.message || "Une erreure est apparue durant le stockage."
    });
});

};


// Récupérer toute les données de température
exports.findAll = (req, res) => {
    Donnee.find()
    .then( donneetemp => {
        res.send(donneetemp);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Une erreure est survenue."
        });
    });
};

// Récupérer une seule donnée de température
exports.findOne = (req, res) => {
    Donnee.findById(req.params.dataId)
    .then(donneetemp => {
        if(!donneetemp){
            return res.status(404).send({
                message: "La temperature n'a pas été trouvée " + req.params.dataId
            });
        }
        res.send(donneetemp);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Température non trouvée " + req.params.dataId
            });
        }
        return res.status(500).send({
            message: "Erreur lors de la récupération " + req.params.dataId
        });
    });
};