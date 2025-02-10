const { User } = require('../models');
class UserRepository {
    async create(data) {
        console.log("data", data);
        try {
            return await User.create(data);
        }
        catch (error) {
            console.log("Something went wrong in repo");
            throw error;
        }
    }
    async delete(userId) {
        try {
            return await User.destroy({ where: { id: userId } });
        }
        catch (error) {
            console.log("Something went wrong in repo");
            throw error;
        }
    }
    async getUserById(userId) {
        try {
            return await User.findByPk(userId,{attributes:['id','email']});
        }
        catch (error) {
            console.log("Something went wrong in repo");
            throw error;
        }
    }
    async getAllUsers() {
        try {
            return await User.findAll({attributes:['id','email']});
        }
        catch (error) {
            console.log("Something went wrong in repo");
            throw error;
        }
    }
}
module.exports = UserRepository;