const { StatusCodes } = require("http-status-codes");
const { ErrorResponse } = require("../utils/common");

const validateRegisterUser = (req, res, next) => {
    const {email,password} = req.body;
    if(!email || !password){
        ErrorResponse.data = null;
        ErrorResponse.message = "Email and password are required";
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    next();
}
const validateIsAdmin = (req, res, next) => {
    if(!req.body.userId){
        ErrorResponse.data = null;
        ErrorResponse.message = "User id is required";
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    next();
}
module.exports = {validateRegisterUser,validateIsAdmin};