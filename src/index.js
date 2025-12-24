const express = require('express'); // function return krega
const cookieParser = require('cookie-parser');

const ServerConfig = require('./config/serverConfig');
const connectDB = require('./config/dbConfig');
const userRouter = require('./routes/userRoute');
const cartRouter = require('./routes/cartRoute');
const authRouter = require('./routes/authRoute');
const productRouter = require('./routes/productRouter');
const orderRouter = require('./routes/orderRoutes');

const app = express(); // function ne object return kra jise hum configure kr skte hain

app.use(cookieParser());
app.use(express.json());
app.use(express.text());    
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