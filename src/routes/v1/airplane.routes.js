const express = require("express");
const { AirplaneController } = require("../../controller");
const { validatorMiddleware } = require("../../middleware");

const router = express.Router();

router.get("/airplane", AirplaneController.getAllAirplane);

router.get(
    "/airplane/:id",
    validatorMiddleware.validateGet,
    AirplaneController.getAirplane
);

router.post(
    "/airplane",
    validatorMiddleware.validateMN,
    AirplaneController.airplaneCreate
);

router.put(
    "/airplane/:id",
    validatorMiddleware.validateMN,
    AirplaneController.updateAirplane
);

router.delete(
    "/airplane/:id",
    validatorMiddleware.validateGet,
    AirplaneController.deleteAirplane
);

module.exports = router;
