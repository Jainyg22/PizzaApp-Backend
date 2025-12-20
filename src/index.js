const express = require('express'); // function return krega
const bodyParser = require('body-parser');

const ServerConfig = require('./config/serverConfig');
const connectDB = require('./config/dbConfig');

const app = express(); // function ne object return kra jise hum configure kr skte hain

app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded());



app.listen(ServerConfig.PORT,async ()=>{
    await connectDB();
    console.log(`Server started at port ${ServerConfig.PORT}...!!`);
})

// jainc451_db_user
// I3iBJkWngUpBrWad

