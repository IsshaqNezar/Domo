module.exports = (app) => {
    const domo = require('../controllers/domo.controller.js');

    /* ************TEMPERATURE******************* */

    // Nouvelle donnée de température
    app.post('/temperature', domo.createTemp);

    app.post('/temperatureauto', domo.createTempAuto);

    // Récupérer toutes les données Temperature
    app.get('/temperature', domo.findAllTemp);

    app.get('/temperatureauto', domo.findAllTempAuto);

    // Récupérer une seule donnée de Température
    app.get('/temperature/:dataId', domo.findOneTemp);


    app.post('/ventilateur', domo.createVentilo);

    app.get('/ventilateur', domo.findAllVentilo);

    app.post('/vitesseventilo', domo.createVentiloSpeed);
    app.get('/vitesseventilo', domo.findAllVentiloSpeed);

    app.post('/seuilventilo', domo.createseuilventilo);
    app.get('/seuilventilo', domo.findAllseuilventilo);


    /* **************LUMIERE******************* */

   // Nouvelle donnée de lumière 
    app.post('/lumiere', domo.createLum);

    // Récupérer toutes les données lumière
    app.get('/lumiere', domo.findAllLum);

    // Récupérer une seule donnée de lumière
    app.get('/lumiere/:dataId', domo.findOneLum);

    app.post('/intensitelum', domo.createintensitelum);
    app.get('/intensitelum', domo.findAllintensitelum);

    app.post('/tempslum', domo.createtempslum);
    app.get('/tempslum', domo.findAlltempslum);

    app.post('/seuillum', domo.createseuillum);
    app.get('/seuillum', domo.findAllseuillum);


    /* ****************PRESENCE*************** */

    // Nouvelle donnée de présence
    app.post('/presence', domo.createPres);

    // Récupérer toutes les données présence
    app.get('/presence', domo.findAllPres);

    // Récupérer une seule donnée de présence
    app.get('/presence/:dataId', domo.findOnePres);


    /* *******************FLAMME******************* */

    // Nouvelle donnée de flamme
    app.post('/flamme', domo.createFlam);

    // Récupérer toutes les données flamme
    app.get('/flamme', domo.findAllFlam);

    // Récupérer une seule donnée de flamme
    app.get('/flamme/:dataId', domo.findOneFlam);


    /* ********************VOLET*************************** */

    app.post('/voletup', domo.createvoletup);
    app.get('/voletup', domo.findAllvoletup);

    app.post('/voletstop', domo.createvoletstop);
    app.get('/voletstop', domo.findAllvoletstop);

    app.post('/voletdown', domo.createvoletdown);
    app.get('/voletdown', domo.findAllvoletdown);

     
    app.ws('/', domo.webSocket)

}