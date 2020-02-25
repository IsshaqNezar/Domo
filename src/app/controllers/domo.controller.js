
const DonneesDomo = require('../models/données.model.js');

const DonneeTemp = require('../models/temp.model.js');
const DonneeTempAuto = require('../models/tempAuto.model.js');
const DonneeVentilo = require('../models/ventilo.model.js');
const DonneeVentiloSpeed = require('../models/ventilospeed.model.js');
const DonneeSeuilVentilo = require('../models/seuilventilo.model.js');


const DonneeLum = require('../models/lumiere.model.js');
const DonneeIntensiteLum = require('../models/intensitelum.model.js');
const DonneeTempsLum = require('../models/tempslum.model.js');
const DonneeSeuilLum = require('../models/seuillum.model.js');
const DonneeLumauto = require('../models/lumiereauto.model');

const DonneePresence = require('../models/presence.model.js');
const DonneeFlamme = require('../models/flamme.model.js');

const DonneeVoletUp = require('../models/voletup.model.js');
const DonneeVoletStop = require('../models/voletstop.model.js');
const DonneeVoletDown = require('../models/voletdown.model.js');


var tableauSocket = [];


exports.findDonneesDomo = (req, res) => {

    DonneesDomo.find()
    .then(data => {
        return res.send(data);
        })
};

exports.findDonneesDomo = (req, res) => {
    DonneesDomo.find().limit(1).sort({$natural:-1})
    .then( donneedomo => {
        res.send(donneedomo);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Une erreure est survenue."
        });
    });
};


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
/* donneetemp.save() */
DonneesDomo.findOne()
.then(data => {return DonneesDomo.findByIdAndUpdate(data._id, {
    temp:{valeur:req.body.valeur}
});})
.then(() => {
    return donneetemp.save();
    })
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
    DonneeTemp.find().limit(1).sort({$natural:-1})
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
    DonneeTempAuto.find().limit(1).sort({$natural:-1})
    .then( donneetempauto => {
        res.send(donneetempauto);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Une erreure est survenue."
        });
    });
};



/* -------------------------------VENTILO-------------------------------------- */

// Créer et stocker une nouvelle donnée de Ventilo
exports.createVentilo = (req, res) => {

    //Valider la requête
    if(!req.body.valeur) {
        return res.status(400).send({
            message: "Il faut une donnée"   
        });
    }

//Créer la donnée de température
const donneeventilo = new DonneeVentilo({
    valeur: req.body.valeur || "Pas de valeur",
});

//Stocker la donnée dans la DB
donneeventilo.save()
.then(data => {
    
    sendSocket(JSON.stringify({
        valeur: data.valeur,
        type: 'donneeventilo',
        }));
    res.send(data);
    
}).catch(err => {
    res.status(500).send({
        message: err.message || "Une erreure est apparue durant le stockage."
    });
});

};

// Récupérer toute les données de ventilo
exports.findAllVentilo = (req, res) => {
    DonneeVentilo.find().limit(1).sort({$natural:-1})
    .then( donneeventilo => {
        res.send(donneeventilo);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Une erreure est survenue."
        });
    });
};


////// Vitesse ///////

// Créer et stocker une nouvelle donnée de Ventilo
exports.createVentiloSpeed = (req, res) => {

    //Valider la requête
    if(!req.body.valeur) {
        return res.status(400).send({
            message: "Il faut une donnée"   
        });
    }

//Créer la donnée de température
const donneeventilospeed = new DonneeVentiloSpeed({
    valeur: req.body.valeur || "Pas de valeur",
});

//Stocker la donnée dans la DB
donneeventilospeed.save()
.then(data => {
    
    sendSocket(JSON.stringify({
        valeur: data.valeur,
        type: 'donneeventilospeed',
        }));
    res.send(data);
    
}).catch(err => {
    res.status(500).send({
        message: err.message || "Une erreure est apparue durant le stockage."
    });
});

};

// Récupérer toute les données de ventilo
exports.findAllVentiloSpeed = (req, res) => {
    DonneeVentiloSpeed.find().limit(1).sort({$natural:-1})
    .then( donneeventilospeed => {
        res.send(donneeventilospeed);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Une erreure est survenue."
        });
    });
};



////// SEUIL ///////

// Créer et stocker une nouvelle donnée de Ventilo
exports.createseuilventilo = (req, res) => {

    //Valider la requête
    if(!req.body.valeur) {
        return res.status(400).send({
            message: "Il faut une donnée"   
        });
    }

//Créer la donnée de température
const donneeseuilventilo = new DonneeSeuilVentilo({
    valeur: req.body.valeur || "Pas de valeur",
});

//Stocker la donnée dans la DB
donneeseuilventilo.save()
.then(data => {
    
    sendSocket(JSON.stringify({
        valeur: data.valeur,
        type: 'donneeseuilventilo',
        }));
    res.send(data);
    
}).catch(err => {
    res.status(500).send({
        message: err.message || "Une erreure est apparue durant le stockage."
    });
});

};

// Récupérer toute les données de ventilo
exports.findAllseuilventilo = (req, res) => {
    DonneeSeuilVentilo.find().limit(1).sort({$natural:-1})
    .then( donneeseuilventilo => {
        res.send(donneeseuilventilo);
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
    DonneeLum.find().limit(1).sort({$natural:-1})
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

// Créer un donnée de lumiere auto
exports.createLumauto = (req, res) => {

    //Valider la requête
    if(!req.body.valeur) {
        return res.status(400).send({
            message: "Il faut une donnée"   
        });
    }

//Créer la donnée de température
const donneelumauto = new DonneeLumauto({
    valeur: req.body.valeur || "Pas de valeur",
    date: req.body.date
});

//Stocker la donnée dans la DB
donneelumauto.save()
.then(data => {
    
    sendSocket(JSON.stringify({
        date: data.date,
        valeur: data.valeur,
        type: 'lumiereauto',
        }));
    res.send(data);
    
}).catch(err => {
    res.status(500).send({
        message: err.message || "Une erreure est apparue durant le stockage."
    });
});

};

// Récupérer dernière donnée de lumière auto
exports.findLumauto = (req, res) => {
    DonneeLumauto.find().limit(1).sort({$natural:-1})
    .then( donneelumauto => {
        res.send(donneelumauto);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Une erreure est survenue."
        });
    });
};


////////////////////// INTENSITE LUMIERE //////////////////////////////

// Créer et stocker une nouvelle donnée de Ventilo
exports.createintensitelum = (req, res) => {

    //Valider la requête
    if(!req.body.valeur) {
        return res.status(400).send({
            message: "Il faut une donnée"   
        });
    }

//Créer la donnée de température
const donneeintensitelum = new DonneeIntensiteLum({
    valeur: req.body.valeur || "Pas de valeur",
});

//Stocker la donnée dans la DB
donneeintensitelum.save()
.then(data => {
    
    sendSocket(JSON.stringify({
        valeur: data.valeur,
        type: 'donneeintensitelum',
        }));
    res.send(data);
    
}).catch(err => {
    res.status(500).send({
        message: err.message || "Une erreure est apparue durant le stockage."
    });
});

};

// Récupérer toute les données de ventilo
exports.findAllintensitelum = (req, res) => {
    DonneeIntensiteLum.find().limit(1).sort({$natural:-1})
    .then( donneeintensitelum => {
        res.send(donneeintensitelum);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Une erreure est survenue."
        });
    });
};


/////////////////////////// TEMPS LUM ///////////////////////////////

// Créer et stocker une nouvelle donnée de Ventilo
exports.createtempslum = (req, res) => {

    //Valider la requête
    if(!req.body.valeur) {
        return res.status(400).send({
            message: "Il faut une donnée"   
        });
    }

//Créer la donnée de température
const donneetempslum = new DonneeTempsLum({
    valeur: req.body.valeur || "Pas de valeur",
});

//Stocker la donnée dans la DB
donneetempslum.save()
.then(data => {
    
    sendSocket(JSON.stringify({
        valeur: data.valeur,
        type: 'donneetempslum',
        }));
    res.send(data);
    
}).catch(err => {
    res.status(500).send({
        message: err.message || "Une erreure est apparue durant le stockage."
    });
});

};

// Récupérer toute les données de ventilo
exports.findAlltempslum = (req, res) => {
    DonneeTempsLum.find().limit(1).sort({$natural:-1})
    .then( donneetempslum => {
        res.send(donneetempslum);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Une erreure est survenue."
        });
    });
};


//////////////////////// SEUIL LUM //////////////////////////////

// Créer et stocker une nouvelle donnée de Ventilo
exports.createseuillum = (req, res) => {

    //Valider la requête
    if(!req.body.valeur) {
        return res.status(400).send({
            message: "Il faut une donnée"   
        });
    }

//Créer la donnée de température
const donneeseuillum = new DonneeSeuilLum({
    valeur: req.body.valeur || "Pas de valeur",
});

//Stocker la donnée dans la DB
donneeseuillum.save()
.then(data => {
    
    sendSocket(JSON.stringify({
        valeur: data.valeur,
        type: 'donneeseuillum',
        }));
    res.send(data);
    
}).catch(err => {
    res.status(500).send({
        message: err.message || "Une erreure est apparue durant le stockage."
    });
});

};

// Récupérer toute les données de ventilo
exports.findAllseuillum = (req, res) => {
    DonneeSeuilLum.find().limit(1).sort({$natural:-1})
    .then( donneeseuillum => {
        res.send(donneeseuillum);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Une erreure est survenue."
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
    DonneePresence.find().limit(1).sort({$natural:-1})
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
    DonneeFlamme.find().limit(1).sort({$natural:-1})
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

/* ************************* VOLET ********************************* */


/////// UP /////////

// Créer et stocker une nouvelle donnée de volet
exports.createvoletup = (req, res) => {

    console.log(req.body);
    
    //Valider la requête
    if(req.body.valeur == undefined) {
        return res.status(400).send({
            message: "Il faut une donnée"   
        });
    }

//Créer la donnée de volet
const donneevoletup = new DonneeVoletUp({
    valeur: req.body.valeur,
});

//Stocker la donnée dans la DB
donneevoletup.save()
.then(data => {
    
    sendSocket(JSON.stringify({
        valeur: data.valeur,
        type: 'donneevoletup',
        }));
    res.send(data);
    
}).catch(err => {
    res.status(500).send({
        message: err.message || "Une erreure est apparue durant le stockage."
    });
});

};

// Récupérer toute les données de volet
exports.findAllvoletup = (req, res) => {
    DonneeVoletUp.find().limit(1).sort({$natural:-1})
    .then( donneevoletup => {
        res.send(donneevoletup);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Une erreure est survenue."
        });
    });
};



/////////////////// STOP //////////////////

// Créer et stocker une nouvelle donnée de volet
exports.createvoletstop = (req, res) => {

    //Valider la requête
    if(!req.body.valeur) {
        return res.status(400).send({
            message: "Il faut une donnée"   
        });
    }

//Créer la donnée de volet
const donneevoletstop = new DonneeVoletStop({
    valeur: req.body.valeur,
});

//Stocker la donnée dans la DB
donneevoletstop.save()
.then(data => {
    
    sendSocket(JSON.stringify({
        valeur: data.valeur,
        type: 'donneevoletstop',
        }));
    res.send(data);
    
}).catch(err => {
    res.status(500).send({
        message: err.message || "Une erreure est apparue durant le stockage."
    });
});

};

// Récupérer toute les données de volet
exports.findAllvoletstop = (req, res) => {
    DonneeVoletStop.find().limit(1).sort({$natural:-1})
    .then( donneevoletstop => {
        res.send(donneevoletstop);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Une erreure est survenue."
        });
    });
};

////////////////// DOWN ///////////////////

// Créer et stocker une nouvelle donnée de volet
exports.createvoletdown = (req, res) => {

    //Valider la requête
    if(!req.body.valeur) {
        return res.status(400).send({
            message: "Il faut une donnée"   
        });
    }

//Créer la donnée de volet
const donneevoletdown = new DonneeVoletDown({
    valeur: req.body.valeur || "Pas de valeur",
});

//Stocker la donnée dans la DB
donneevoletdown.save()
.then(data => {
    
    sendSocket(JSON.stringify({
        valeur: data.valeur,
        type: 'donneevoletdown',
        }));
    res.send(data);
    
}).catch(err => {
    res.status(500).send({
        message: err.message || "Une erreure est apparue durant le stockage."
    });
});

};

// Récupérer toute les données de volet
exports.findAllvoletdown = (req, res) => {
    DonneeVoletDown.find().limit(1).sort({$natural:-1})
    .then( donneevoletdown => {
        res.send(donneevoletdown);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Une erreure est survenue."
        });
    });
};


/* ************************* SOCKET **************************** */

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