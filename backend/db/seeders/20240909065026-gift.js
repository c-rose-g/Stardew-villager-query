"use strict";

const category = require("../models/category");
const season = require("../models/season");

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
		 * building, season, and location are nullable
		 * categories: {1:artisan goods, 2:recipes, 3:foraging, 4:fishes, 5:minerals, 6:crops, 7:trees, 8:books, 9:animals, 10:trinkets,
		 *              11:resources, 12:trash, 13:special, 14:ingredients, 15:monster loot}
		 * locations: {1: pelican, 2: cindersap, 3: beach, 4: mountain, 5:witches swamp, 6: farm, 7:desert, 8:ginger island, 9: sewers}
		 * seasons: {1: Spring, 2:summer, 3: fall, 4: winter, 5: year-round}
		 */
		return queryInterface.bulkInsert("Gifts", [
			// artisan goods
			{ name: "Honey", categoryId: 1, locationId: 6, seasonId: 1 },
			{ name: "Honey", categoryId: 1, locationId: 6, seasonId: 2 },
			{ name: "Honey", categoryId: 1, locationId: 6, seasonId: 3 },
			{ name: "Wine", categoryId: 1, locationId: 6, seasonId: 5 },
			{ name: "Pale Ale", categoryId: 1, locationId: 6, seasonId: 5 },
			{ name: "Beer", categoryId: 1, locationId: 6, seasonId: 5 },
			{ name: "Cheese", category: 1, locationId: 6, seasonId: 5 },
			{ name: "Goat Cheese", category: 1, locationId: 6, seasonId: 5 },
			{ name: "Mead", categoryId: 1, locationId: 6, seasonId: 5 },
			{ name: "Beer", categoryId: 1, locationId: 6, seasonId: 5 },
			{ name: "Coffee", categoryId: 1, locationId: 6, seasonId: 5 },
			{ name: "Green Tea", categoryId: 1, locationId: 6, seasonId: 5 },
			{ name: "Juice", categoryId: 1, locationId: 6, seasonId: 5 },
			{ name: "Cloth", categoryId: 1, locationId: 6, seasonId: 5 },
			{ name: "Dinosaur Mayonnaise", categoryId: 1, locationId: 6, seasonId: 5 },
			{ name: "Duck Mayonnaise", categoryId: 1, locationId: 6, seasonId: 5 },
			{ name: "Mayonnaise", categoryId: 1, locationId: 6, seasonId: 5 },
			{ name: "Void Mayonnaise", categoryId: 1, locationId: 6, seasonId: 5 },
      { name:'Truffle Oil', categoryId: 1, locationId: 6, seasonId: 5 },
			{ name: "Oil", categoryId: 1, locationId: 6, seasonId: 5 },
			{ name: "Wheat Flour", categoryId: 1, locationId: 6, seasonId: 5 },
			{ name: "Sugar", categoryId: 1, locationId: 6, seasonId: 5 },
			{ name: "Rice", categoryId: 1, locationId: 6, seasonId: 5 },
			{ name: "Vinegar", categoryId: 1, locationId: 6, seasonId: 5 },
      { name: 'Aged Roe', categoryId: 1, locationId: 6, seasonId: 5 },
      { name: 'Caviar', categoryId: 1, locationId: 6, seasonId: 5 },
      { name: 'Jelly' , categoryId: 1, locationId: 6, seasonId: 5 },
      { name: 'Pickle' , categoryId: 1, locationId: 6, seasonId: 5 },
      { name: 'Smoked Fish', categoryId: 1, locationId: 6, seasonId: 5 },
      { name: 'Dried Mushroom', categoryId: 1, locationId: 6, seasonId: 5 },
      { name: 'Dried Fruit', categoryId: 1, locationId: 6, seasonId: 5 },
      { name: 'Raisin', categoryId: 1, locationId: 6, seasonId: 5 },
      { name: 'Maple Syrup', categoryId: 1, locationId: 6, seasonId: 5 },
      { name: 'Oak Resin', categoryId: 1, locationId: 6, seasonId: 5 },
      { name: 'Pine Tar', categoryId: 1, locationId: 6, seasonId: 5 },
      { name: 'Mystic Syrup', categoryId: 1, locationId: 6, seasonId: 5 },
			// recipes
			// foraging
			// fishes
			// minerals
			// crops
			// trees
			// books
			// animals
			// trinkets
			// resources
			// trash
			// special
			// ingredients
			// monster loot
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
