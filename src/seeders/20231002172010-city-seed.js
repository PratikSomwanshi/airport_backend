"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        /**
         * Add seed commands here.
         *
         * Example:
         * await queryInterface.bulkInsert('People', [{
         *   name: 'John Doe',
         *   isBetaMember: false
         * }], {});
         */
        await queryInterface.bulkInsert("cities", [
            { name: "Mumbai", createdAt: new Date(), updatedAt: new Date() },
            { name: "Delhi", createdAt: new Date(), updatedAt: new Date() },
            { name: "Bangalore", createdAt: new Date(), updatedAt: new Date() },
            { name: "Hyderabad", createdAt: new Date(), updatedAt: new Date() },
            { name: "Chennai", createdAt: new Date(), updatedAt: new Date() },
            { name: "Kolkata", createdAt: new Date(), updatedAt: new Date() },
            { name: "Pune", createdAt: new Date(), updatedAt: new Date() },
            { name: "Ahmedabad", createdAt: new Date(), updatedAt: new Date() },
            { name: "Jaipur", createdAt: new Date(), updatedAt: new Date() },
            { name: "Surat", createdAt: new Date(), updatedAt: new Date() },
            { name: "Lucknow", createdAt: new Date(), updatedAt: new Date() },
            { name: "Kanpur", createdAt: new Date(), updatedAt: new Date() },
            { name: "Nagpur", createdAt: new Date(), updatedAt: new Date() },
            { name: "Indore", createdAt: new Date(), updatedAt: new Date() },
            { name: "Thane", createdAt: new Date(), updatedAt: new Date() },
            { name: "Bhopal", createdAt: new Date(), updatedAt: new Date() },
            {
                name: "Visakhapatnam",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            { name: "Patna", createdAt: new Date(), updatedAt: new Date() },
            { name: "Vadodara", createdAt: new Date(), updatedAt: new Date() },
            { name: "Ghaziabad", createdAt: new Date(), updatedAt: new Date() },
            { name: "Ludhiana", createdAt: new Date(), updatedAt: new Date() },
            { name: "Agra", createdAt: new Date(), updatedAt: new Date() },
            { name: "Nashik", createdAt: new Date(), updatedAt: new Date() },
            { name: "Faridabad", createdAt: new Date(), updatedAt: new Date() },
            { name: "Meerut", createdAt: new Date(), updatedAt: new Date() },
            { name: "Rajkot", createdAt: new Date(), updatedAt: new Date() },
            { name: "Varanasi", createdAt: new Date(), updatedAt: new Date() },
            { name: "Srinagar", createdAt: new Date(), updatedAt: new Date() },
            {
                name: "Aurangabad",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            { name: "Dhanbad", createdAt: new Date(), updatedAt: new Date() },
            { name: "Amritsar", createdAt: new Date(), updatedAt: new Date() },
            {
                name: "Navi_Mumbai",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            { name: "Allahabad", createdAt: new Date(), updatedAt: new Date() },
            { name: "Ranchi", createdAt: new Date(), updatedAt: new Date() },
            { name: "Jabalpur", createdAt: new Date(), updatedAt: new Date() },
            { name: "Gwalior", createdAt: new Date(), updatedAt: new Date() },
            {
                name: "Vijayawada",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            { name: "Jodhpur", createdAt: new Date(), updatedAt: new Date() },
            { name: "Raipur", createdAt: new Date(), updatedAt: new Date() },
            { name: "Kota", createdAt: new Date(), updatedAt: new Date() },
            { name: "Guwahati", createdAt: new Date(), updatedAt: new Date() },
            {
                name: "Chandrapur",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            { name: "Solapur", createdAt: new Date(), updatedAt: new Date() },
            {
                name: "Hubli-Dharwad",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            { name: "Bareilly", createdAt: new Date(), updatedAt: new Date() },
            { name: "Moradabad", createdAt: new Date(), updatedAt: new Date() },
            { name: "Mysore", createdAt: new Date(), updatedAt: new Date() },
        ]);
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    },
};
