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
		return queryInterface.bulkInsert("Preferences", [
			{ id: 1, name: "Loves" },
			{ id: 2, name: "Likes" },
			{ id: 3, name: "Neutrals" },
			{ id: 4, name: "Dislikes" },
			{ id: 5, name: "Hates" },
			{ id: 6, name: "Universal Loves" },
			{ id: 7, name: "Universal Likes" },
			{ id: 8, name: "Universal Neutrals" },
			{ id: 9, name: "Universal Dislikes" },
			{ id: 10, name: "Universal Hates" },
		]);
	},

	async down(queryInterface, Sequelize) {
		/**
		 * Add commands to revert seed here.
		 *
		 * Example:
		 * await queryInterface.bulkDelete('People', null, {});
		 */
		return queryInterface.bulkDelete("Preferences", null, {});
	},
};
