const { StatusCodes } = require("http-status-codes");
const { errorResponse } = require("../utils/common");
const AppError = require("../utils/error/app.error");

function validateMN(req, res, next) {
    if (!req.body.modelNumber) {
        errorResponse.message = "Model Number is required";
        errorResponse.error = new AppError(
            ["model number can not be empty"],
            StatusCodes.BAD_REQUEST
        );

        return res.status(StatusCodes.BAD_REQUEST).json(errorResponse);
    }

    next();
}

function validateGet(req, res, next) {
    if (req.params.id > 5) {
        errorResponse.message = "Record Nof Found";
        errorResponse.error = new AppError(
            ["Requested data not found"],
            StatusCodes.BAD_REQUEST
        );

        return res.status(StatusCodes.BAD_REQUEST).json(errorResponse);
    }
    next();
}

module.exports = {
    validateMN,
    validateGet,
};
