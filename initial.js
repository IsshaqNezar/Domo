const mongoose = require('mongoose');
const dbConfig = require('./config/database.config.js');
const DonneesDomo = require('./src/app/models/donnees.model.js');

mongoose.Promise = global.Promise;

//Connecting to the database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
})
.then(() => {
    const myDomo = new DonneesDomo();
    return myDomo.save();
})
.then(() => {
    console.log("DonneesDomo inserted successfully");
    process.exit();
})
.catch(err => {

    console.log('Could not connect to the database. Exiting now..');
    console.log(err);
    process.exit();
});
