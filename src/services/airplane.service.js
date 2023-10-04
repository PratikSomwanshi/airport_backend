const { StatusCodes } = require("http-status-codes");
const { AirplaneCrud } = require("../repositories");
const AppError = require("../utils/error/app.error");

const airplaneCrud = new AirplaneCrud();

class AirplaneService {
    async create(data) {
        try {
            const response = await airplaneCrud.create(data);
            return response;
        } catch (error) {
            let explanation = [];
            error.errors.forEach((error) => explanation.push(error.message));

            if (error.name == "SequelizeValidationError") {
                throw new AppError(explanation, StatusCodes.BAD_REQUEST);
            }
            throw new AppError(explanation, StatusCodes.BAD_REQUEST);
        }
    }

    async getAll() {
        try {
            const response = await airplaneCrud.getAll();
            return response;
        } catch (error) {
            const explanation = ["can not fetch the records"];
            throw new AppError(explanation, StatusCodes.BAD_REQUEST);
        }
    }

    async get(id) {
        try {
            const response = await airplaneCrud.get(id);
            return response;
        } catch (error) {
            const explanation = ["can not fetch the record"];
            throw new AppError(explanation, StatusCodes.BAD_REQUEST);
        }
    }

    async destroy(id) {
        try {
            const response = await airplaneCrud.destroy(id);
            return response;
        } catch (error) {
            const explanation = ["can not delete the record"];
            throw new AppError(explanation, StatusCodes.BAD_REQUEST);
        }
    }

    async update(data, id) {
        try {
            const response = await airplaneCrud.update(data, id);
            return response;
        } catch (error) {
            const explanation = ["can not update the record"];
            throw new AppError(explanation, StatusCodes.BAD_REQUEST);
        }
    }
}

module.exports = AirplaneService;
