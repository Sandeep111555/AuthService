const { UserRepository } = require('../repositories');
const {ServerConfig} = require('../config')
const jwt = require('jsonwebtoken')
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
        var token = jwt.sign(user,JWT_KEY,{expiresIn: '1h'});

    } catch(error){
        console.log("something went wrong in service");
    }
}
function createToken(user){
    try{
        var token = jwt.sign(user,JWT_KEY,{expiresIn: '1h'});

    } catch(error){
        console.log("something went wrong in service");
    }
}
function createToken(user){
    try{
        var token = jwt.sign(user,JWT_KEY,{expiresIn: '1h'});

    } catch(error){
        console.log("something went wrong in service");
    }
}
function createToken(user){
    try{
        var token = jwt.sign(user,JWT_KEY,{expiresIn: '1h'});

    } catch(error){
        console.log("something went wrong in service");
    }
}
function createToken(user){
    try{
        var token = jwt.sign(user,JWT_KEY,{expiresIn: '1h'});
        
    } catch(error){
        console.log("something went wrong in token creation");
    }
}
function verifyToken(user){
    try{
        var response = jwt.verify(user,JWT_KEY);

    } catch(error){
        console.log("something went wrong in token validation");
    }
}
module.exports = { createUser, deleteUser, getUserById, getAllUsers, verifyToken, createToken };