const express = require('express'); // function return krega
const cookieParser = require('cookie-parser');
// const bodyParser = require('body-parser'); // express hi provide kr deta hai

const ServerConfig = require('./config/serverConfig');
const connectDB = require('./config/dbConfig');
const userRouter = require('./routes/userRoute');
const cartRouter = require('./routes/cartRoute');
const authRouter = require('./routes/authRoute');
const { isLoggedIn } = require('./validation/authValidator');
// const User = require('./schema/userSchema');

const app = express(); // function ne object return kra jise hum configure kr skte hain

app.use(cookieParser());
app.use(express.json());
app.use(express.text());
// app.use(bodyParser.urlencoded());
app.use(express.urlencoded({ extended : true }));

//Routing middleware
app.use('/users',userRouter); // connects router to server
app.use('/carts',cartRouter); 
app.use('/auth',authRouter);

app.get('/ping',isLoggedIn,(req,res)=>{
    // controller
    console.log(req.body);
    console.log(req.cookies);
    return res.json({message : 'OK'});
})

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



