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
		return queryInterface.bulkInsert("Gift_Locations", [
			{ giftId: 1, locationId: 6 },
			{ giftId: 2, locationId: 6 },
			{ giftId: 3, locationId: 6 },
			{ giftId: 4, locationId: 6 },
			{ giftId: 5, locationId: 6 },
			{ giftId: 6, locationId: 6 },
			{ giftId: 7, locationId: 6 },
			{ giftId: 8, locationId: 6 },
			{ giftId: 9, locationId: 6 },
			{ giftId: 10, locationId: 6 },
			{ giftId: 11, locationId: 6 },
			{ giftId: 12, locationId: 6 },
			{ giftId: 13, locationId: 6 },
			{ giftId: 14, locationId: 6 },
			{ giftId: 15, locationId: 6 },
			{ giftId: 16, locationId: 6 },
			{ giftId: 17, locationId: 1 },
			{ giftId: 18, locationId: 1 },
			{ giftId: 19, locationId: 1 },
			{ giftId: 20, locationId: 1 },
		]);
	},

	async down(queryInterface, Sequelize) {
		/**
		 * Add commands to revert seed here.
		 *
		 * Example:
		 * await queryInterface.bulkDelete('People', null, {});
		 */
		return queryInterface.bulkDelete("Gift_Locations", null, {});
	},
};
