const { UserRepository } = require('../repositories');
const {ServerConfig} = require('../config')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const userRepository = new UserRepository();
const JWT_KEY = ServerConfig.JWT_KEY;
async function createUser(data) {
    try {
        const user = await userRepository.create(data);
        return user;
    }
    catch (error) {
        console.log("Something went wrong in service");
        throw error;
    }
}
async function deleteUser(userId) {
    try {
        const user = await userRepository.delete(userId);
        return user;
    }
    catch (error) {
        console.log("Something went wrong in service");
        throw error;
    }
}
async function getUserById(userId) {
    try {
        const user = await userRepository.getUserById(userId);
        return user;
    }
    catch (error) {
        console.log("Something went wrong in service");
        throw error;
    }
}
async function getAllUsers() {
    try {
        const user = await userRepository.getAllUsers();
        return user;
    }
    catch (error) {
        console.log("Something went wrong in service");
        throw error;
    }
}

function createToken(user){
    try{
        const token = jwt.sign(user,JWT_KEY,{ expiresIn: '1h'});
        return token;
    } catch(error){
        console.log("something went wrong in service");
        throw error;
    }
}
function verifyToken(user){
    try{
        var response = jwt.verify(user,JWT_KEY);
        return response;
    } catch(error){
        console.log("something went wrong in token validation");
        throw error;
    }
}
async function signIn(email,plainPassword){
    try {
        //fetching user using email
        const user = await userRepository.findByEmail(email);
        //compare incoming plain password with stored encrypt password
        const passwordCheck = checkPassword(plainPassword,user.password);
        if(!passwordCheck){
            console.log("Password doesn't match");
            throw {error: "Incorrect password"};
        }
        //if match then create jwt token
        const jwtToken = createToken({id:user.id,email:user.email});
        return jwtToken;
    } catch (error) {
        console.log('Something went wrong in signing');
        throw error;
    }
}
function checkPassword(plainPassword,encryptedPassword){
    try {
        return bcrypt.compareSync(plainPassword,encryptedPassword);
    } catch (error) {
        console.log('something went wrong in checking password');
        throw error;
    }
}
module.exports = { createUser, deleteUser, getUserById, getAllUsers,signIn };