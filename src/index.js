const express = require('express'); // function return krega

const ServerConfig = require('./config/serverConfig');

const app = express(); // function ne object return kra jise hum configure kr skte hain

app.listen(ServerConfig.PORT,()=>{
    console.log(`Server started at port ${ServerConfig.PORT}...!!`);
})

