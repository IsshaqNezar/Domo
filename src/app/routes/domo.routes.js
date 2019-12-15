module.exports = (app) => {
    const domo = require('../controllers/domo.controller.js');

    // Nouvelle donnée de température
    app.post('/temperature', domo.createTemp);

    // Récupérer toutes les données Temperature
    app.get('/temperature', domo.findAllTemp);

    // Récupérer une seule donnée de Température
    app.get('/temperature/:dataId', domo.findOneTemp);

   // Nouvelle donnée de lumière 
    app.post('/lumiere', domo.createLum);

    // Récupérer toutes les données lumière
    app.get('/lumiere', domo.findAllLum);

    // Récupérer une seule donnée de lumière
    app.get('/lumiere/:dataId', domo.findOneLum);

    // Nouvelle donnée de présence
    app.post('/presence', domo.createPres);

    // Récupérer toutes les données présence
    app.get('/presence', domo.findAllPres);

    // Récupérer une seule donnée de présence
    app.get('/presence/:dataId', domo.findOnePres);

    // Nouvelle donnée de flamme
    app.post('/flamme', domo.createFlam);

    // Récupérer toutes les données flamme
    app.get('/flamme', domo.findAllFlam);

    // Récupérer une seule donnée de flamme
    app.get('/flamme/:dataId', domo.findOneFlam);
     
    app.ws('/', domo.webSocket)

}