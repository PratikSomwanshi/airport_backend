"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        /**
         * Add seed commands here.
         *
         * Example:
         *
         */

        await queryInterface.bulkInsert("Airplanes", [
            {
                modelNumber: "Airbus_A320",
                capacity: 900,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                modelNumber: "Boeing_737",
                capacity: 400,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                modelNumber: "Boeing_777",
                capacity: 600,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                modelNumber: "Boeing_787_Dreamliner",
                capacity: 850,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                modelNumber: "Airbus_A330",
                capacity: 100,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]);
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        await queryInterface.bulkDelete("Airplanes", null, {});
    },
};
