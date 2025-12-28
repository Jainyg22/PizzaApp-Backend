const { findUser, createUser } = require("../repositories/userRepository");
const { createcart } = require('../repositories/cartRepository');

async function registerUser(userDetails){
    console.log("Hitting service layer");
    // It will create a new user in database
    
    // 1. we need to check if the user with this email and mobile number already exists or not
    const user = await findUser({
        email : userDetails.email,
        mobileNumber : userDetails.mobileNumber,
    });
    console.log("user fetched");
    if(user){
        // we found a user
        throw { reason : 'User with the given mail and mobile Number already exist',statusCode : 400};
    }
    // 2. If not, then create a user in the database
    // const role = req.user?.role === 'ADMIN' && req.body.role === 'ADMIN' ? 'ADMIN' : 'USER';
    console.log("creating new user");
    const newUser=await createUser({
        email : userDetails.email,
        password : userDetails.password,
        firstName : userDetails.firstName,
        lastName : userDetails.lastName,
        mobileNumber : userDetails.mobileNumber
        // role
    });
    if(!newUser){
        throw{reason : 'Something went wrong, cannot create user', statusCode : 500};
    }

    await createcart(newUser._id);
    // 3. return the details of created user
    return newUser;
}   

module.exports ={
    registerUser
};