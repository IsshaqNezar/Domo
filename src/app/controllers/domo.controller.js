const Donnee = require('../models/domo.model.js');


// Créer et stocker une nouvelle donnée de température
exports.create = (req, res) => {
    //Valider la requête
    if(!req.body.content) {
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

// Récupérer une seule donnée de température
exports.findOne = (req, res) => {
    Donnee.findById(req.params.donneeId)
    .then(donneelum => {
        if(!donneelum) {
            return res.status(404).send({
                message: "Pas de donnée de lumière" + req.params.donneeId
            });
        }
        res.send(donneelum);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Aucune donnée trouvée avec l'Id" + req.params.donneeId
            });
        }
        return res.status(500).send({
            message: "Récupérer la donnée avec Id à causer une erreur" + req.params.donneeId
        });
    });
};