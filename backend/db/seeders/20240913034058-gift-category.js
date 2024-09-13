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
		return queryInterface.bulkInsert("Gift_Categories", [
			{ giftId: 1, categoryId: 1 },
			{ giftId: 2, categoryId: 1 },
			{ giftId: 3, categoryId: 1 },
			{ giftId: 4, categoryId: 1 },
			{ giftId: 5, categoryId: 1 },
			{ giftId: 6, categoryId: 1 },
			{ giftId: 7, categoryId: 1 },
			{ giftId: 8, categoryId: 1 },
			{ giftId: 9, categoryId: 1 },
			{ giftId: 10, categoryId: 1 },
			{ giftId: 11, categoryId: 1 },
			{ giftId: 12, categoryId: 1 },
			{ giftId: 13, categoryId: 1 },
			{ giftId: 14, categoryId: 1 },
			{ giftId: 15, categoryId: 1 },
			{ giftId: 16, categoryId: 1 },
			{ giftId: 17, categoryId: 14 },
			{ giftId: 18, categoryId: 14 },
			{ giftId: 19, categoryId: 14 },
			{ giftId: 20, categoryId: 14 },
		]);
	},

	async down(queryInterface, Sequelize) {
		/**
		 * Add commands to revert seed here.
		 *
		 * Example:
		 * await queryInterface.bulkDelete('People', null, {});
		 */
		return queryInterface.bulkDelete("Gift_Categories");
	},
};
