const { StatusCodes } = require("http-status-codes");
const { AirplaneService } = require("../services");
const { errorResponse, successResponse } = require("../utils/common");

const airplaneService = new AirplaneService();

async function airplaneCreate(req, res) {
    try {
        const response = await airplaneService.create({
            ...req.body,
        });

        successResponse.message = "Airplane created successfully";
        successResponse.data = response;

        return res.status(StatusCodes.CREATED).json(successResponse);
    } catch (error) {
        errorResponse.message = "Something went wrong while creating airplane";
        errorResponse.error = error;

        return res.status(error.statusCode).json(errorResponse);
    }
}

async function getAllAirplane(req, res) {
    try {
        const response = await airplaneService.getAll();
        successResponse.message = "Successfully fetch all records";
        successResponse.data = response;
        return res.status(StatusCodes.OK).json(successResponse);
    } catch (error) {
        errorResponse.error = error;
        return res.status(error.statusCode).json(errorResponse);
    }
}

async function getAirplane(req, res) {
    try {
        const response = await airplaneService.get(req.params.id);
        successResponse.message = "Successfully fetch the record";
        successResponse.data = response;
        return res.status(StatusCodes.OK).json(successResponse);
    } catch (error) {
        errorResponse.error = error;
        return res.status(error.statusCode).json(errorResponse);
    }
}

async function deleteAirplane(req, res) {
    try {
        const response = await airplaneService.destroy(req.params.id);
        successResponse.message = "Successfully deleted the record";
        successResponse.data = response;
        return res.status(StatusCodes.OK).json(successResponse);
    } catch (error) {
        errorResponse.error = error;
        return res.status(error.statusCode).json(errorResponse);
    }
}

async function updateAirplane(req, res) {
    try {
        const data = {
            modelNumber: req.body.modelNumber,
            capacity: req.body.capacity,
        };
        const id = req.params.id;
        const response = await airplaneService.update(data, id);
        successResponse.message = "Successfully updated the record";
        successResponse.data = response;
        return res.status(StatusCodes.OK).json(successResponse);
    } catch (error) {
        errorResponse.error = error;
        return res.status(error.statusCode).json(errorResponse);
    }
}

module.exports = {
    airplaneCreate,
    getAllAirplane,
    getAirplane,
    deleteAirplane,
    updateAirplane,
};
