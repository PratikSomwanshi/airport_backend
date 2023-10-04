const express = require("express")
const {airplane} = require("./v1")

const router = express.Router()


router.use("/v1", airplane)

module.exports = router;