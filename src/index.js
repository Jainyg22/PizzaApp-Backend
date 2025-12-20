const express = require('express'); // function return krega
// const bodyParser = require('body-parser'); // express hi provide kr deta hai

const ServerConfig = require('./config/serverConfig');
const connectDB = require('./config/dbConfig');
// const User = require('./schema/userSchema');

const app = express(); // function ne object return kra jise hum configure kr skte hain

app.use(express.json());
app.use(express.text());
// app.use(bodyParser.urlencoded());
app.use(express.urlencoded({extended:true}));



app.listen(ServerConfig.PORT,async ()=>{
    await connectDB();
    console.log(`Server started at port ${ServerConfig.PORT}...!!`);

    // const newUser=await User.create({
    //     email:'a@b.com',
    //     password:'123456',
    //     firstName:'Jonahan',
    //     lastName:'Majors',
    //     mobileNumber:'1231231230'
    // });

    // console.log("Created new User");
    // console.log(newUser);
})

// jainc451_db_user
// I3iBJkWngUpBrWad

