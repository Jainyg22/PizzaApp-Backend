const express = require('express'); // function return krega

const ServerConfig = require('./config/serverConfig');
const connectDB = require('./config/dbConfig');

const app = express(); // function ne object return kra jise hum configure kr skte hain

app.listen(ServerConfig.PORT,async ()=>{
    await connectDB();
    console.log(`Server started at port ${ServerConfig.PORT}...!!`);
})

// jainc451_db_user
// I3iBJkWngUpBrWad

