const { StatusCodes } = require("http-status-codes");
const { ErrorResponse } = require("../utils/common");

const validateResgisterUser = (req, res, next) => {
    const {email,password} = req.body;
    if(!email || !password){
        ErrorResponse.data = null;
        ErrorResponse.message = "Email and password are required";
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    next();
}
module.exports = {validateResgisterUser};