const DonneeTemp = require('../models/temp.model.js');
const DonneeLum = require('../models/lumiere.model.js');
const DonneePresence = require('../models/presence.model.js');
const DonneeFlamme = require('../models/flamme.model.js');

/* ************************************************************** 

                        TEMPERATURE

***************************************************************** */

// Créer et stocker une nouvelle donnée de température
exports.create = (req, res) => {

    //Valider la requête
    if(!req.body.valeur) {
        return res.status(400).send({
            message: "Il faut une donnée"   
        });
    }

//Créer la donnée de température
const donneetemp = new DonneeTemp({
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
    DonneeTemp.find()
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
    DonneeTemp.findById(req.params.dataId)
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


/* 
*****************************************************************************

                            LUMIERE 

***************************************************************************** */

// Créer et stocker une nouvelle donnée de lumière
exports.create = (req, res) => {

    //Valider la requête
    if(!req.body.valeur) {
        return res.status(400).send({
            message: "Il faut une donnée"   
        });
    }

//Créer la donnée de température
const donneelum = new DonneeLum({
    valeur: req.body.valeur || "Pas de valeur",
    date: req.body.date
});

//Stocker la donnée dans la DB
donneelum.save()
.then(data => {
    res.send(data);
}).catch(err => {
    res.status(500).send({
        message: err.message || "Une erreure est apparue durant le stockage."
    });
});

};


// Récupérer toute les données de lumière
exports.findAll = (req, res) => {
    DonneeLum.find()
    .then( donneelum => {
        res.send(donneelum);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Une erreure est survenue."
        });
    });
};

// Récupérer une seule donnée de lumière
exports.findOne = (req, res) => {
    DonneeLum.findById(req.params.dataId)
    .then(donneelum => {
        if(!donneelum){
            return res.status(404).send({
                message: "La donnée de lumière n'a pas été trouvée " + req.params.dataId
            });
        }
        res.send(donneelum);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Donnée de lumière non trouvée " + req.params.dataId
            });
        }
        return res.status(500).send({
            message: "Erreur lors de la récupération " + req.params.dataId
        });
    });
};

/* ***************************************************************

                        PRESENCE

*************************************************************** */

// Créer et stocker une nouvelle donnée de presence
exports.create = (req, res) => {

    //Valider la requête
    if(!req.body.valeur) {
        return res.status(400).send({
            message: "Il faut une donnée"   
        });
    }

//Créer la donnée de température
const donneepresence = new DonneePresence({
    valeur: req.body.valeur || "Pas de valeur",
    date: req.body.date
});

//Stocker la donnée dans la DB
donneepresence.save()
.then(data => {
    res.send(data);
}).catch(err => {
    res.status(500).send({
        message: err.message || "Une erreure est apparue durant le stockage."
    });
});

};


// Récupérer toute les données de lumière
exports.findAll = (req, res) => {
    DonneePresence.find()
    .then( donneepresence => {
        res.send(donneepresence);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Une erreure est survenue."
        });
    });
};

// Récupérer une seule donnée de lumière
exports.findOne = (req, res) => {
    DonneePresence.findById(req.params.dataId)
    .then(donneepresence => {
        if(!donneepresence){
            return res.status(404).send({
                message: "La donnée de présence n'a pas été trouvée " + req.params.dataId
            });
        }
        res.send(donneepresence);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Donnée de présence non trouvée " + req.params.dataId
            });
        }
        return res.status(500).send({
            message: "Erreur lors de la récupération " + req.params.dataId
        });
    });
};

/* ***************************************************************

                        FLAMME
                        
*************************************************************** */


// Créer et stocker une nouvelle donnée de flamme
exports.create = (req, res) => {

    //Valider la requête
    if(!req.body.valeur) {
        return res.status(400).send({
            message: "Il faut une donnée"   
        });
    }

//Créer la donnée de température
const donneeflamme = new DonneeFlamme({
    valeur: req.body.valeur || "Pas de valeur",
    date: req.body.date
});

//Stocker la donnée dans la DB
donneeflamme.save()
.then(data => {
    res.send(data);
}).catch(err => {
    res.status(500).send({
        message: err.message || "Une erreure est apparue durant le stockage."
    });
});

};


// Récupérer toute les données de flamme
exports.findAll = (req, res) => {
    DonneeFlamme.find()
    .then( donneeflamme => {
        res.send(donneeflamme);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Une erreure est survenue."
        });
    });
};

// Récupérer une seule donnée de lumière
exports.findOne = (req, res) => {
    DonneeFlamme.findById(req.params.dataId)
    .then(donneeflamme => {
        if(!donneeflamme){
            return res.status(404).send({
                message: "La donnée de flamme n'a pas été trouvée " + req.params.dataId
            });
        }
        res.send(donneeflamme);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Donnée de flamme non trouvée " + req.params.dataId
            });
        }
        return res.status(500).send({
            message: "Erreur lors de la récupération " + req.params.dataId
        });
    });
};