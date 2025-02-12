const { StatusCodes } = require('http-status-codes');
const { userService } = require('../services');
const { SuccessResponse, ErrorResponse } = require('../utils/common');

async function createUser(req, res) {
    try {
        const user = await userService.createUser(req.body);
        SuccessResponse.data = user;
        SuccessResponse.message = "User created successfully";
        return res.status(StatusCodes.OK).json(SuccessResponse);
    }
    catch (error) {
        console.log("Something went wrong in controller");
        ErrorResponse.message = "Something went wrong while creating user";
        ErrorResponse.error = error;
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
    }
}
async function deleteUser(req, res) {
    try {
        const user = await userService.deleteUser(req.params.userId);
        SuccessResponse.data = user;
        SuccessResponse.message = "User deleted successfully";
        return res.status(StatusCodes.OK).json(SuccessResponse);
    }
    catch (error) {
        console.log("Something went wrong in controller");
        ErrorResponse.message = "Something went wrong while deleting user";
        ErrorResponse.error = error;
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
    }
}
async function getUserById(req, res) {
    try {
        const user = await userService.getUserById(req.params.userId);
        SuccessResponse.data = user;
        SuccessResponse.message = "User fetched successfully";
        return res.status(StatusCodes.OK).json(SuccessResponse);
    }
    catch (error) {
        console.log("Something went wrong in controller");
        ErrorResponse.message = "Something went wrong while fetching user";
        ErrorResponse.error = error;
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
    }
}
async function getAllUsers(req, res) {
    try {
        const users = await userService.getAllUsers();
        SuccessResponse.data = users;
        SuccessResponse.message = "Users fetched successfully";
        return res.status(StatusCodes.OK).json(SuccessResponse);
    }
    catch (error) {
        console.log("Something went wrong in controller");
        ErrorResponse.message = "Something went wrong while fetching users";
        ErrorResponse.error = error;
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
    }
}
async function signIn(req, res) {
    try {
        const token = await userService.signIn(req.body.email, req.body.password);
        SuccessResponse.message = "User Authenticated";
        SuccessResponse.data = token;
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        console.log("Something went wrong in signIn");
        ErrorResponse.message = "Something went wrong in signIn";
        ErrorResponse.error = error;
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
    }
}
async function isAuthenticated(req, res) {
    try {
        const token = req.headers['x-access-token'];
        const isAuthenticatedUser = await userService.isAuthenticated(token);
        SuccessResponse.message = "User is Authenticated";
        SuccessResponse.data = isAuthenticatedUser;
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        console.log("Something went wrong in isAuthenticated()");
        ErrorResponse.message = "Something went wrong in isAuthenticated()";
        ErrorResponse.error = error;
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
    }
}
async function isAdmin(req, res) {
    try{
        const isAdminRole = await userService.isAdmin(req.body.userId);
        SuccessResponse.message = isAdminRole? "User is Admin":"User is not Admin";
        SuccessResponse.data = {};
        SuccessResponse.success = isAdminRole?true:false;
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch(error){
        console.log("Something went wrong in isAdmin()");
        ErrorResponse.message = error.message;
        ErrorResponse.error = error;
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
    }
}
module.exports = { createUser, deleteUser, getUserById, getAllUsers, signIn, isAuthenticated,isAdmin};