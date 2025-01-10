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

		return queryInterface.bulkInsert("Seasons", [
			{ id: 1, name: "Spring" },
			{ id: 2, name: "Summer" },
			{ id: 3, name: "Fall" },
			{ id: 4, name: "Winter" },
			{ id: 5, name: "Year-Round" },
		]);
	},

	async down(queryInterface, Sequelize) {
		/**
		 * Add commands to revert seed here.
		 *
		 * Example:
		 * await queryInterface.bulkDelete('People', null, {});
		 */
		return queryInterface.bulkDelete("Seasons", null);
	},
};
