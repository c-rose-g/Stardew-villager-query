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
			{ giftid: 1, locationId: 6 },
			{ giftid: 2, locationId: 6 },
			{ giftid: 3, locationId: 6 },
			{ giftid: 4, locationId: 6 },
			{ giftid: 5, locationId: 6 },
			{ giftid: 6, locationId: 6 },
			{ giftid: 7, locationId: 6 },
			{ giftid: 8, locationId: 6 },
			{ giftid: 9, locationId: 6 },
			{ giftid: 10, locationId: 6 },
			{ giftid: 11, locationId: 6 },
			{ giftid: 12, locationId: 6 },
			{ giftid: 13, locationId: 6 },
			{ giftid: 14, locationId: 6 },
			{ giftid: 15, locationId: 6 },
			{ giftid: 16, locationId: 6 },
			{ giftid: 17, locationId: 1 },
			{ giftid: 18, locationId: 1 },
			{ giftid: 19, locationId: 1 },
			{ giftid: 20, locationId: 1 },
		]);
	},

	async down(queryInterface, Sequelize) {
		/**
		 * Add commands to revert seed here.
		 *
		 * Example:
		 * await queryInterface.bulkDelete('People', null, {});
		 */
		return queryInterface.bulkDelete("Gift_Locations");
	},
};
