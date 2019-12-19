const DonneeTemp = require('../models/temp.model.js');
const DonneeTempAuto = require('../models/tempAuto.model.js');
const DonneeLum = require('../models/lumiere.model.js');
const DonneePresence = require('../models/presence.model.js');
const DonneeFlamme = require('../models/flamme.model.js');

var tableauSocket = [];

/* ************************************************************** 

                        TEMPERATURE

***************************************************************** */

// Créer et stocker une nouvelle donnée de température
exports.createTemp = (req, res) => {

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
    
    sendSocket(JSON.stringify({
        date: data.date,
        valeur: data.valeur,
        type: 'temperature',
        }));
    res.send(data);
    
}).catch(err => {
    res.status(500).send({
        message: err.message || "Une erreure est apparue durant le stockage."
    });
});

};


// Récupérer toute les données de température
exports.findAllTemp = (req, res) => {
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
exports.findOneTemp = (req, res) => {
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


// Créer et stocker une nouvelle donnée de températureAuto
exports.createTempAuto = (req, res) => {

    //Valider la requête
    if(!req.body.valeur) {
        return res.status(400).send({
            message: "Il faut une donnée"   
        });
    }

//Créer la donnée de température
const donneetempauto = new DonneeTempAuto({
    valeur: req.body.valeur || "Pas de valeur",
});

//Stocker la donnée dans la DB
donneetempauto.save()
.then(data => {
    
    sendSocket(JSON.stringify({
        valeur: data.valeur,
        type: 'temperatureauto',
        }));
    res.send(data);
    
}).catch(err => {
    res.status(500).send({
        message: err.message || "Une erreure est apparue durant le stockage."
    });
});

};

// Récupérer toute les données de températureAuto
exports.findAllTempAuto = (req, res) => {
    DonneeTempAuto.find()
    .then( donneetempauto => {
        res.send(donneetempauto);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Une erreure est survenue."
        });
    });
};

/* 
*****************************************************************************

                            LUMIERE 

***************************************************************************** */

// Créer et stocker une nouvelle donnée de lumière
exports.createLum = (req, res) => {

    //Valider la requête
    if(!req.body.valeur) {
        return res.status(400).send({
            message: "Il faut une donnée"   
        });
    }

//Créer la donnée de lumière
const donneelum = new DonneeLum({
    valeur: req.body.valeur || "Pas de valeur",
    date: req.body.date
});

//Stocker la donnée dans la DB
donneelum.save()
.then(data => {
    sendSocket(JSON.stringify({
        date: data.date,
        valeur: data.valeur,
        type: 'lumiere',
        }));
    res.send(data);
}).catch(err => {
    res.status(500).send({
        message: err.message || "Une erreure est apparue durant le stockage."
    });
});

};


// Récupérer toute les données de lumière
exports.findAllLum = (req, res) => {
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
exports.findOneLum = (req, res) => {
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
exports.createPres = (req, res) => {

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
    sendSocket(JSON.stringify({
        date: data.date,
        valeur: data.valeur,
        type: 'presence',
        }));
    res.send(data);
}).catch(err => {
    res.status(500).send({
        message: err.message || "Une erreure est apparue durant le stockage."
    });
});

};


// Récupérer toute les données de lumière
exports.findAllPres = (req, res) => {
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
exports.findOnePres = (req, res) => {
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
exports.createFlam = (req, res) => {

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
    sendSocket(JSON.stringify({
        date: data.date,
        valeur: data.valeur,
        type: 'flamme',
        }));
    res.send(data);
}).catch(err => {
    res.status(500).send({
        message: err.message || "Une erreure est apparue durant le stockage."
    });
});

};


// Récupérer toute les données de flamme
exports.findAllFlam = (req, res) => {
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
exports.findOneFlam = (req, res) => {
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

exports.webSocket = (ws,req) => {
    
    ws.on('message', (msg) => {
        msg = JSON.parse(msg);
        if(msg.type == 'connect') {
            console.log('push tableau');
            tableauSocket.push(ws);
        }
    })
};

sendSocket = (data) => {
    console.log(data);
    for(var i in tableauSocket) {
        if(tableauSocket[i].readyState !== tableauSocket[i].CLOSED){
        tableauSocket[i].send(data);
        }
    }

}