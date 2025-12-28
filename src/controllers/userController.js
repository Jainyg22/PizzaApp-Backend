const { registerUser } = require("../services/userService");
const AppError = require('../utils/appError');

async function createUser(req,res){
    console.log("➡️ Request hit:", req.method, req.originalUrl);
    try{
        console.log('here');
        const response = await registerUser(req.body);
        console.log('fetched user');
        return res.status(201).json({
            message : 'Successfully registered the user',
            success : true,
            data : response,
            error : {}
        });
    } catch(error){
        if(error instanceof AppError) {
            return res.status(error.statusCode).json({
                success: false,
                message: error.message,
                data: {},
                error: error
            });
        }
    }
}

module.exports={
    createUser
}