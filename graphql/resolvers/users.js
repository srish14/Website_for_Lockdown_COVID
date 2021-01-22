const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { UserInputError } = require('apollo-server'); //apollo client will be able to handle error

const { validateRegisterInput, validateLoginInput } = require('../../util/validators');
const { SECRET_KEY } = require('../../config');
const User = require('../../models/User');

function generateToken(user){
    return jwt.sign(
        {
        id: user.id,
        email: user.email,
        username: user.username,
        }, 
        SECRET_KEY, 
        { expiresIn: '1h'} //encode so that only our server is able to decode it
    );
}

module.exports = {
    Mutation: {
        async login(_, { username, password }) {
            const {errors, valid} = validateLoginInput(username, password);

            if(!valid ){
                throw new UserInputError('Errors' , {errors });
            }
            
            const user = await User.findOne({ username });

            if(!user){ //if user is not found
                errors.general = 'User not found';
                throw new UserInputError('User not found', {errors});
            }

            const match = await bcrypt.compare(password, user.password); //password checking
            if(!match){
                errors.general = 'Wrong credentials';
                throw new UserInputError('Wrong credentials', {errors});
            }

            const token = generateToken(user); //jwt token from user
            return{
                ...user._doc,
                id: user._id,
                token
            };
        },
        async register(_, { registerInput: { username, email, password, confirmPassword }
        }
            ){
            //Validate user data
            const { valid, errors } = validateRegisterInput(username, email, password, confirmPassword);
            if(!valid) {
                throw new UserInputError ('Errors', { errors });
            }
            //TODO: Make sure doesn't already exist
            const user = await User.findOne({ username });
            if (user) {
                throw new UserInputError('Username is taken', {
                    errors: {
                        username: 'This username is taken'
                    }
                });
            }
            //Hash password and creates an auth token
            password = await bcrypt.hash(password, 12); //bcrypt is asynchronous 

            const newUser = new User({
                email,
                username,
                password,
                createdAt: new Date().toISOString()
            });
            const res = await newUser.save();

            const token = generateToken(res);

            return{
                ...res._doc, //spread user data
                id: res._id,
                token //returning token
            };
        }
    }
};