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
			{
				name: "Dinosaur Mayonnaise",
				categoryId: 1,
				locationId: 6,
				seasonId: 5,
			},
			{ name: "Duck Mayonnaise", categoryId: 1, locationId: 6, seasonId: 5 },
			{ name: "Mayonnaise", categoryId: 1, locationId: 6, seasonId: 5 },
			{ name: "Void Mayonnaise", categoryId: 1, locationId: 6, seasonId: 5 },
			{ name: "Truffle Oil", categoryId: 1, locationId: 6, seasonId: 5 },
			{ name: "Oil", categoryId: 1, locationId: 6, seasonId: 5 },
			{ name: "Wheat Flour", categoryId: 1, locationId: 6, seasonId: 5 },
			{ name: "Sugar", categoryId: 1, locationId: 6, seasonId: 5 },
			{ name: "Rice", categoryId: 1, locationId: 6, seasonId: 5 },
			{ name: "Vinegar", categoryId: 1, locationId: 6, seasonId: 5 },
			{ name: "Aged Roe", categoryId: 1, locationId: 6, seasonId: 5 },
			{ name: "Caviar", categoryId: 1, locationId: 6, seasonId: 5 },
			{ name: "Jelly", categoryId: 1, locationId: 6, seasonId: 5 },
			{ name: "Pickle", categoryId: 1, locationId: 6, seasonId: 5 },
			{ name: "Smoked Fish", categoryId: 1, locationId: 6, seasonId: 5 },
			{ name: "Dried Mushroom", categoryId: 1, locationId: 6, seasonId: 5 },
			{ name: "Dried Fruit", categoryId: 1, locationId: 6, seasonId: 5 },
			{ name: "Raisin", categoryId: 1, locationId: 6, seasonId: 5 },
			{ name: "Maple Syrup", categoryId: 1, locationId: 6, seasonId: 5 },
			{ name: "Oak Resin", categoryId: 1, locationId: 6, seasonId: 5 },
			{ name: "Pine Tar", categoryId: 1, locationId: 6, seasonId: 5 },
			{ name: "Mystic Syrup", categoryId: 1, locationId: 6, seasonId: 5 },
			// recipes
			{ name: "Fried Egg", categoryId: 2, locationId: 6, seasonId: 5 },
			{ name: "Omelet", categoryId: 2, locationId: 6, seasonId: 5 },
			{ name: "Salad", categoryId: 2, locationId: 6, seasonId: 5 },
			{ name: "Cheese Cauliflower", categoryId: 2, locationId: 6, seasonId: 5 },
			{ name: "Baked Fish", categoryId: 2, locationId: 6, seasonId: 5 },
			{ name: "Parsnip Soup", categoryId: 2, locationId: 6, seasonId: 5 },
			{ name: "Vegetable Medley", categoryId: 2, locationId: 6, seasonId: 5 },
			{ name: "Complete Breakfast", categoryId: 2, locationId: 6, seasonId: 5 },
			{ name: "Fried Calamari", categoryId: 2, locationId: 6, seasonId: 5 },
			{ name: "Strange Bun", categoryId: 2, locationId: 6, seasonId: 5 },
			{ name: "Lucky Lunch", categoryId: 2, locationId: 6, seasonId: 5 },
			{ name: "Fried Mushroom", categoryId: 2, locationId: 6, seasonId: 5 },
			{ name: "Pizza", categoryId: 2, locationId: 6, seasonId: 5 },
			{ name: "Bean Hotpot", categoryId: 2, locationId: 6, seasonId: 5 },
			{ name: "Glazed Yams", categoryId: 2, locationId: 6, seasonId: 5 },
			{ name: "Carp Surprise", categoryId: 2, locationId: 6, seasonId: 5 },
			{ name: "Hashbrowns", categoryId: 2, locationId: 6, seasonId: 5 },
			{ name: "Pancakes", categoryId: 2, locationId: 6, seasonId: 5 },
			{ name: "Salmon Dinner", categoryId: 2, locationId: 6, seasonId: 5 },
			{ name: "Blueberry Tart", categoryId: 2, locationId: 6, seasonId: 5 },
			{ name: "Super Meal", categoryId: 2, locationId: 6, seasonId: 5 },
			{ name: "Stuffing", categoryId: 2, locationId: 6, seasonId: 5 },
			{ name: "Fish Taco", categoryId: 2, locationId: 6, seasonId: 5 },
			{ name: "Crispy Bass", categoryId: 2, locationId: 6, seasonId: 5 },
			{ name: "Pepper Poppers", categoryId: 2, locationId: 6, seasonId: 5 },
			{ name: "Bread", categoryId: 2, locationId: 6, seasonId: 5 },
			{ name: "Tom Kha Soup", categoryId: 2, locationId: 6, seasonId: 5 },
			{ name: "Trout Soup", categoryId: 2, locationId: 6, seasonId: 5 },
			{ name: "Chocolate Cake", categoryId: 2, locationId: 6, seasonId: 5 },
			{ name: "Pink Cake", categoryId: 2, locationId: 6, seasonId: 5 },
			{ name: "Rhubarb Pie", categoryId: 2, locationId: 6, seasonId: 5 },
			{ name: "Cookie", categoryId: 2, locationId: 6, seasonId: 5 },
			{ name: "Spaghetti", categoryId: 2, locationId: 6, seasonId: 5 },
			{ name: "Fried Eel", categoryId: 2, locationId: 6, seasonId: 5 },
			{ name: "Spicy Eel", categoryId: 2, locationId: 6, seasonId: 5 },
			{ name: "Sashimi", categoryId: 2, locationId: 6, seasonId: 5 },
			{ name: "Maki Roll", categoryId: 2, locationId: 6, seasonId: 5 },
			{ name: "Tortilla", categoryId: 2, locationId: 6, seasonId: 5 },
			{ name: "Red Plate", categoryId: 2, locationId: 6, seasonId: 5 },
			{ name: "Eggplant Parmesan", categoryId: 2, locationId: 6, seasonId: 5 },
			{ name: "Rice Pudding", categoryId: 2, locationId: 6, seasonId: 5 },
			{ name: "Ice Cream", categoryId: 2, locationId: 6, seasonId: 5 },
			{ name: "Autumn's Bounty", categoryId: 2, locationId: 6, seasonId: 5 },
			{ name: "Pumpkin Soup", categoryId: 2, locationId: 6, seasonId: 5 },
			{ name: "Cranberry Sause", categoryId: 2, locationId: 6, seasonId: 5 },
			{ name: "Farmer's Lunck", categoryId: 2, locationId: 6, seasonId: 5 },
			{ name: "Survival Burger", categoryId: 2, locationId: 6, seasonId: 5 },
			{ name: "Dish O' The Sea", categoryId: 2, locationId: 6, seasonId: 5 },
			{ name: "Miner's Treat", categoryId: 2, locationId: 6, seasonId: 5 },
			{ name: "Roots Platter", categoryId: 2, locationId: 6, seasonId: 5 },
			{name: "Triple Shot Espresso", categoryId: 2, locationId: 6, seasonId: 5 },
			{ name: "Seafoam Pudding", categoryId: 2, locationId: 6, seasonId: 5 },
			{ name: "Algae Soup", categoryId: 2, locationId: 6, seasonId: 5 },
			{ name: "Pale Broth", categoryId: 2, locationId: 6, seasonId: 5 },
			{ name: "Plum Pudding", categoryId: 2, locationId: 6, seasonId: 5 },
			{ name: "Artichoke Dip", categoryId: 2, locationId: 6, seasonId: 5 },
			{ name: "Stir Fry", categoryId: 2, locationId: 6, seasonId: 5 },
			{ name: "Roasted Hazelnuts", categoryId: 2, locationId: 6, seasonId: 5 },
			{ name: "Pumpkin Pie", categoryId: 2, locationId: 6, seasonId: 5 },
			{ name: "Radish Salad", categoryId: 2, locationId: 6, seasonId: 5 },
			{ name: "Fruit Salad", categoryId: 2, locationId: 6, seasonId: 5 },
			{ name: "Blackberry Cobbler", categoryId: 2, locationId: 6, seasonId: 5 },
			{ name: "Cranberry Candy", categoryId: 2, locationId: 6, seasonId: 5 },
			{ name: "Bruschetta", categoryId: 2, locationId: 6, seasonId: 5 },
			{ name: "Coleslaw", categoryId: 2, locationId: 6, seasonId: 5 },
			{ name: "Fiddlehead Risotto", categoryId: 2, locationId: 6, seasonId: 5 },
			{ name: "Poppyseed Muffin", categoryId: 2, locationId: 6, seasonId: 5 },
			{ name: "Chowder", categoryId: 2, locationId: 6, seasonId: 5 },
			{ name: "Fish Stew", categoryId: 2, locationId: 6, seasonId: 5 },
			{ name: "Escargot", categoryId: 2, locationId: 6, seasonId: 5 },
			{ name: "Lobster Bisque", categoryId: 2, locationId: 6, seasonId: 5 },
			{ name: "Maple Bar", categoryId: 2, locationId: 6, seasonId: 5 },
			{ name: "Crab Cakes", categoryId: 2, locationId: 6, seasonId: 5 },
			{ name: "Shrimp Cocktail", categoryId: 2, locationId: 6, seasonId: 5 },
			{ name: "Ginger Ale", categoryId: 2, locationId: 6, seasonId: 5 },
			{ name: "Banana Pudding", categoryId: 2, locationId: 6, seasonId: 5 },
			{ name: "Mango Sticky Rice", categoryId: 2, locationId: 6, seasonId: 5 },
			{ name: "Poi", categoryId: 2, locationId: 6, seasonId: 5 },
			{ name: "Tropical Curry", categoryId: 2, locationId: 6, seasonId: 5 },
			{ name: "Squid Ink Ravioli", categoryId: 2, locationId: 6, seasonId: 5 },
			{ name: "Moss Soup", categoryId: 2, locationId: 6, seasonId: 5 },
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
