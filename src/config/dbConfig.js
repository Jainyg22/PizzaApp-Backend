const mongoose = require('mongoose');
const serverConfig = require('./serverConfig');

// Below function helps us to connect to a mongodb server
async function connectDB(){
    try{
        await mongoose.connect(serverConfig.DB_URL);
        console.log("Successfully connected to the mongoDB server....");
    } catch(error){
        console.log("Not able to connect to mongoDB server");
        console.log(error);
    }
}

module.exports =  connectDB;