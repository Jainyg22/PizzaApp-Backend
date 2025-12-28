const express = require('express'); // function return krega
const cookieParser = require('cookie-parser');
const cors = require('cors');

const ServerConfig = require('./config/serverConfig');
const connectDB = require('./config/dbConfig');
const userRouter = require('./routes/userRoute');
const cartRouter = require('./routes/cartRoute');
const authRouter = require('./routes/authRoute');
const productRouter = require('./routes/productRouter');
const orderRouter = require('./routes/orderRoute');

const app = express(); // function ne object return kra jise hum configure kr skte hain

app.use(cors({
    // origin: 'http://localhost:5173', // allow to server to accept request from different origin
    origin: ['http://localhost:5173',ServerConfig.FRONTEND_URL], // allow to server to accept request from different origin
    credentials: true, // allow session cookie from browser to pass through
}));

app.use(cookieParser());
app.use(express.json());
// app.use(express.text());    
app.use(express.urlencoded({ extended : true }));

//Routing middleware
app.use('/users',userRouter); // connects router to server
app.use('/carts',cartRouter); 
app.use('/auth',authRouter);
app.use('/products',productRouter);
app.use('/orders', orderRouter);

app.get('/ping',(req,res)=>{
    // controller
    console.log(req.body);
    console.log(req.cookies);
    return res.json({message : 'OK'});
});

app.listen(ServerConfig.PORT,async ()=>{
    await connectDB();
    console.log(`Server started at port ${ServerConfig.PORT}...!!`);

})