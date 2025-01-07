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
		return queryInterface.bulkInsert("Gift_Buildings", [
			{ giftId: 1, buildingId: 12 },
			{ giftId: 2, buildingId: 12 },
			{ giftId: 3, buildingId: 25 },
			{ giftId: 4, buildingId: 7 },
			{ giftId: 5, buildingId: 24 },
			{ giftId: 6, buildingId: null },
			{ giftId: 7, buildingId: null },
			{ giftId: 8, buildingId: 7 },
			{ giftId: 9, buildingId: 6 },
			{ giftId: 10, buildingId: 12 },
			{ giftId: 11, buildingId: 24 },
			{ giftId: 12, buildingId: 20 },
			{ giftId: 13, buildingId: null },
			{ giftId: 14, buildingId: null },
			{ giftId: 15, buildingId: null },
			{ giftId: 16, buildingId: 12 },
			{ giftId: 17, buildingId: 6 },
			{ giftId: 18, buildingId: 6 },
			{ giftId: 19, buildingId: 6 },
			{ giftId: 20, buildingId: 6 },
		]);
	},

	async down(queryInterface, Sequelize) {
		/**
		 * Add commands to revert seed here.
		 *
		 * Example:
		 * await queryInterface.bulkDelete('People', null, {});
		 */
		return queryInterface.bulkDelete("Gift_Buildings", null, {});
	},
};
