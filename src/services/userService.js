class UserService{

    constructor(_userRepository){
        // in the argument we will expect userRepository object
        this.userRepository=_userRepository;
    }

    async registerUser(userDetails){
        console.log("Hitting service layer");
        // It will create a new user in database
        
        // 1. we need to check if the user with this email and mobile number already exists or not
        const user = await this.userRepository.findUser({
            email : userDetails.email,
            mobileNumber : userDetails.mobileNumber,
        });

        if(user){
            // we found a user
            throw { reason : 'User with the given mail and mobile Number already exist',statusCode : 400};
        }
        // 2. If not, then create a user in the database
        const newUser=await this.userRepository.createUser({
            email : userDetails.email,
            password : userDetails.password,
            firstName : userDetails.firstName,
            lastName : userDetails.lastName,
            mobileNumber : userDetails.mobileNumber
        });

        if(!newUser){
            throw{reason : 'Something went wrong, cannot create user', statusCode : 500};
        }

        // 3. return the details of created user
        return newUser;
    }   
}

module.exports = UserService;