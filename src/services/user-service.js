const { UserRepository } = require('../repositories');
const userRepository = new UserRepository();

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
module.exports = { createUser, deleteUser, getUserById, getAllUsers };