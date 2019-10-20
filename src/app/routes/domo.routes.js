module.exports = (app) => {
    const notes = require('../controllers/domo.controller.js');

    // Nouvelle donnée de température
    app.post('/temperature', domo.create);

    // Récupérer toutes les données Temperature
    app.get('/temperature', domo.findAll);

    // Récupérer une seule donnée de Température
    app.get('/temperature/:dataId', domo.findOne);

    // Nouvelle donnée de lumière 
    app.post('/lumiere', domo.create);

    // Récupérer toutes les données lumière
    app.get('/lumiere', domo.findAll);

    // Récupérer une seule donnée de lumière
    app.get('/lumiere/:dataId', domo.findOne);

    // Nouvelle donnée de présence
    app.post('/presence', domo.create);

    // Récupérer toutes les données présence
    app.get('/presence', domo.findAll);

    // Récupérer une seule donnée de présence
    app.get('/presence/:dataId', domo.findOne);
    

}