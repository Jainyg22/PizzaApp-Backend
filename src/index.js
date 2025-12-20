const express = require('express'); // function return krega
// const bodyParser = require('body-parser'); // express hi provide kr deta hai

const ServerConfig = require('./config/serverConfig');
const connectDB = require('./config/dbConfig');

const app = express(); // function ne object return kra jise hum configure kr skte hain

app.use(express.json());
app.use(express.text());
// app.use(bodyParser.urlencoded());
app.use(express.urlencoded({extended:true}));



app.listen(ServerConfig.PORT,async ()=>{
    await connectDB();
    console.log(`Server started at port ${ServerConfig.PORT}...!!`);
})

// jainc451_db_user
// I3iBJkWngUpBrWad

