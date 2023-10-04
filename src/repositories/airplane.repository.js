const Crud = require("./crud.repository")
const {airplane} = require("../models")

class AirplaneCrud extends Crud{
    constructor(){
        super(airplane)
    }
}

module.exports = AirplaneCrud;