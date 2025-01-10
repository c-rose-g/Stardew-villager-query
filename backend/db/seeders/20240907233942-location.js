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
		 * later - add differentiation between the valley and in beyond the valley locations
		 * only including standard farm
		 * 1. pelican town - houses, buildings
		 * 2. forest -
		 * 3. beach - elliot's cabin, fish store
		 * 4. mountain - mines, skull cavern, adventures build, quarry, railroad
		 * 5- witch's swamp - witch's hut
		 * 6 - farm
		 * 7 - desert - oasis, desert trader
		 * 8 - ginger island
		 * 9 - sewers
		 * 10 - bus stop ?
		 * 11 - backwoods ?
		 */
		return queryInterface.bulkInsert("Locations", [
			{ id: 1, name: "Pelican Town" },
			{ id: 2, name: "Cindersap Forest" },
			{ id: 3, name: "Beach" },
			{ id: 4, name: "Mountain" },
			{ id: 5, name: "Witch's Swamp" },
			{ id: 6, name: "Farm" },
			{ id: 7, name: "Desert" },
			{ id: 8, name: "Ginger Island" },
			{ id: 9, name: "Sewers" },
		]);
	},

	async down(queryInterface, Sequelize) {
		/**
		 * Add commands to revert seed here.
		 *
		 * Example:
		 * await queryInterface.bulkDelete('People', null, {});
		 */
		return queryInterface.bulkDelete("Locations", null);
	},
};
