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
		 * 1: Pelican TOWN
		 * 2: Cindersap Forest
		 * 3: Beach
		 * 4: Mountain
		 * 5: Witch's Swamp
		 * 6: Farm
		 * 7: Desert
		 * 8: Ginger Island
		 * 9: Sewers
		 *
		 * houses
		 * 1 - 1 river road
		 * 2: - 1 willow lane
		 * 3: 24 mountain rd
		 * 4: 2 willow lane
		 * 5: leahs cottage
		 * 6: trailer
		 * 7: eastern cave
		 * 8: mayor's manor
		 * 9: tent
		 * 10: elliot's cabin
		 * 11: tree house in mountain
     * 12: Leo's Hut
		 */
		return queryInterface.bulkInsert("Houses", [
			{ address: "1 River Road", locationId: 1 },
			{ address: "1 Willow Lane", locationId: 1 },
			{ address: "24 Mountain Road", locationId: 4 },
			{ address: "2 Willow Lane", locationId: 1 },
			{ address: "Leah's Cottage", locationId: 2 },
			{ address: "Trailer", locationId: 1 },
			{ address: "Eastern Cave", locationId: 4 },
			{ address: "Mayor's Manor", locationId: 1 },
			{ address: "Tent", locationId: 4 },
			{ address: "Elliot's Cabin", locationId: 3 },
			{ address: "Treehouse", locationId: 4 },
			{ address: "Leo's Hut", locationId: 8 },
		]);
	},

	async down(queryInterface, Sequelize) {
		/**
		 * Add commands to revert seed here.
		 *
		 * Example:
		 * await queryInterface.bulkDelete('People', null, {});
		 */
		return queryInterface.bulkDelete("Houses", null, {});
	},
};
