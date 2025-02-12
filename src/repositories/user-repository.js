const { User, Role } = require('../models');
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
            return await User.findByPk(userId, { attributes: ['id', 'email'] });
        }
        catch (error) {
            console.log("Something went wrong in repo");
            throw error;
        }
    }
    async getAllUsers() {
        try {
            return await User.findAll({ attributes: ['id', 'email'] });
        }
        catch (error) {
            console.log("Something went wrong in repo");
            throw error;
        }
    }
    async findByEmail(email) {
        try {
            return await User.findOne({
                where: {
                    email
                }
            })
        } catch (error) {
            console.log("Something went wrong in findByEmail() Repository layer");
            throw error;
        }
    }
    async isAdmin(userId) {
        try {
            const user = await User.findByPk(userId);
            if (!user) {
                throw new Error("User not found");
            }
            const adminRole = await Role.findOne({
                where: {
                    name: 'ADMIN'
                }
            })
            if (!adminRole) {
                throw new Error("Admin role not found");
            }
            return await user.hasRole(adminRole);
        } catch (error) {
            console.log("Something went wrong in isAdmin() Repository layer");
            throw error;
        }
    }
}
module.exports = UserRepository;