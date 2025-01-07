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
		return queryInterface.bulkInsert("Gift_Seasons", [
			{ giftId: 1, seasonId: 1 },
			{ giftId: 1, seasonId: 2 },
			{ giftId: 1, seasonId: 3 },
			{ giftId: 2, seasonId: 5 },
			{ giftId: 3, seasonId: 5 },
			{ giftId: 4, seasonId: 5 },
			{ giftId: 5, seasonId: 5 },
			{ giftId: 6, seasonId: 5 },
			{ giftId: 7, seasonId: 5 },
			{ giftId: 8, seasonId: 5 },
			{ giftId: 9, seasonId: 5 },
			{ giftId: 10, seasonId: 5 },
			{ giftId: 11, seasonId: 5 },
			{ giftId: 12, seasonId: 5 },
			{ giftId: 13, seasonId: 5 },
			{ giftId: 14, seasonId: 5 },
			{ giftId: 15, seasonId: 5 },
			{ giftId: 16, seasonId: 5 },
			{ giftId: 17, seasonId: 5 },
			{ giftId: 18, seasonId: 5 },
			{ giftId: 19, seasonId: 5 },
			{ giftId: 20, seasonId: 5 },
			{ giftId: 117, seasonId: 1 },
			{ giftId: 116, seasonId: 1 },
		]);
	},

	async down(queryInterface, Sequelize) {
		/**
		 * Add commands to revert seed here.
		 *
		 * Example:
		 * await queryInterface.bulkDelete('People', null, {});
		 */
		return queryInterface.bulkDelete("Gift_Seasons", null, {});
	},
};
