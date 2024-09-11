"use strict";

const category = require("../models/category");
const season = require("../models/season");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		/**
		 * building, season, and location are nullable
     * buildings:{6:pierres}
		 * categories: {1:artisan goods, 2:recipes, 3:foraging, 4:fishes, 5:minerals, 6:crops,
     *              7:trees, 8:books, 9:animals, 10:trinkets, 11:resources, 12:trash,
     *              13:special, 14:ingredients, 15:monster loot}
		 * locations: {1: town, 2: cindersap, 3: beach, 4: mountain, 5:witches swamp, 6: farm,
     *             7:desert, 8:ginger island, 9: sewers}
		 * seasons: {1: Spring, 2:summer, 3: fall, 4: winter, 5: year-round}
     * I made ingredients only for pierre's, add to farm in later implementation
      // { name:'Red Mushroom', categoryId: 3, seasonId: 2 , buildingId: 11 }
          - red mushroom and purple mushroom are found in different seasons/locations, but year round in the mines (level 81) - for simplicity, I'm choosing year-round in mountains / mines
          - cactus fruit can be foraged and farmed, but only labeling it as foragable from desert
          - any fish found in river and town will be classified under forest
          - any fish found in river (town) will be classfied under Pelican Town
          - midnight carp found in fall,winter and year-round on ginger island - only adding year round/ginger island
     *
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
			{ name: "Truffle Oil", categoryId: 1, locationId: 6, seasonId: 5 },
			{ name: "Oil", categoryId: 14, locationId:1, buildingId: 6, seasonId: 5 },
			{ name: "Wheat Flour", categoryId: 14, locationId:1, buildingId: 6, seasonId: 5 },
			{ name: "Sugar", categoryId: 14, locationId:1, buildingId: 6, seasonId: 5 },
			{ name: "Rice", categoryId: 14, locationId:1, buildingId: 6, seasonId: 5 },
			{ name: "Vinegar", categoryId: 14, locationId:1, buildingId: 6, seasonId: 5 },
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
      // foraging - year-round
      { name:'Sap', categoryId: 3, seasonId: 5 },
      // foraging - spring
      { name:'Common Mushroom', categoryId: 3, seasonId: 1 },
      { name:'Daffodil', categoryId: 3, seasonId: 1 , locationId: 1 },
      { name:'Dandelion', categoryId: 3, seasonId:1 , locationId: 2 },
      { name:'Leek', categoryId: 3, seasonId:1 , locationId: 4 },
      { name:'Morel', categoryId: 3, seasonId: 1 , buildingId: 11 },
      { name:'Salmonberry', categoryId: 3, seasonId: 1 },
      { name:'Spring Onion', categoryId: 3, seasonId: 1 , locationId: 2},
      { name:'Wild Horseradish', categoryId: 3, seasonId: 1, buildingId: 11 },
      // foraging - summer
      { name:'Fiddlehead Fern', categoryId: 3, seasonId: 2, buildingId: 11 },
      { name:'Spicy Berry', categoryId: 3, seasonId: 2 , locationId: 2 },
      { name:'Sweet Pea', categoryId: 3, seasonId: 2 , locationId: 1 },
      { name:'Rainbow Shell', categoryId: 3, seasonId:2, locationId:3 },
      // foraging - fall
      { name:'Blackberry', categoryId: 3, seasonId: 3, locationId: 1 },
      { name:'Chanterelle', categoryId: 3, seasonId: 3 , buildingId: 11 },
      { name:'Common Mushroom', categoryId: 3, seasonId: 3 },
      { name:'Hazelnut', categoryId: 3, seasonId: 3, locationId: 4 },
      { name:'Wild Plum', categoryId: 3, seasonId: 3, locationId:4 },
      // foraging - winter
      { name:'Crocus', categoryId: 3, seasonId: 4, locationId: 1 },
      { name:'Crystal Fruit', categoryId: 3, seasonId: 4 , locationId: 2},
      { name:'Holly', categoryId: 3, seasonId: 4 , buildingId: 11 },
      { name:'Snow Yam', categoryId: 3, seasonId: 4 },
      { name:'Winter Root', categoryId: 3, seasonId: 4 },
      { name:'Nautilus Shell', categoryId: 3, seasonId: 4, locationId: 3 },
      // foraging - year-round - by location
      // foraging - year-round - beach
      { name:'Clam', categoryId: 3, seasonId: 5, locationId: 3 },
      { name:'Cockle', categoryId: 3, seasonId: 5, locationId: 3 },
      { name:'Coral', categoryId: 3, seasonId: 5, locationId: 3 },
      { name:'Mussel', categoryId: 3, seasonId: 5, locationId: 3 },
      { name:'Oyster', categoryId: 3, seasonId: 5, locationId: 3 },
      { name:'Sea Urchin', categoryId: 3, seasonId: 5, locationId: 3 },
      { name:'Seaweed', categoryId: 3, seasonId: 5, locationId: 3 },
      // foraging - year-round - mountain
      { name:'Cave Carrot', categoryId: 3, seasonId: 5, locationId: 4, buildingId: 17 },
      { name:'Red Mushroom', categoryId: 3, seasonId: 5, locationId: 4, buildingId: 17 },
      { name:'Purple Mushroom', categoryId: 3, seasonId: 5, locationId: 4, buildingId: 17 },
      // foraging - year-round - desert
      { name:'Cactus Fruit', categoryId: 3, seasonId:5, locationId: 7 },
      { name:'Coconut', categoryId: 3, seasonId:5, locationId: 7 },
      // foraging - year-round - ginger island
      { name:'Ginger', categoryId: 3, seasonId: 5, locationId: 8 },
      { name:'Magma Cap', categoryId: 3, seasonId: 5, locationId: 8 },
			// fishes
      // fishes - by location
      // fishes - town
      { name: '', categoryId: 4, locationId: 1 },
      // fishes - forest - waterfall included here too
      { name: 'Dorado', categoryId: 4, locationId: 2., seasonId: 2 },
      { name: 'Chub', categoryId: 4, locationId: 2 },
      { name: 'Goby', categoryId: 4, locationId: 2 },
      // fishes - beach
      { name: 'Sea Cucumber', categoryId: 4, locationId: 3, seasonId: 3 },
      { name: 'Sea Cucumber', categoryId: 4, locationId: 3 , seasonId: 4 },
      { name: 'Albacore', categoryId: 4, locationId: 3, seasonId: 3 },
      { name: 'Albacore', categoryId: 4, locationId: 3, seasonId: 4 },
      { name: 'Anchovy', categoryId: 4, locationId: 3, seasonId: 1 },
      { name: 'Anchovy', categoryId: 4, locationId: 3, seasonId: 3 },
      { name: 'Tilapia', categoryId: 4, locationId: 3, seasonId: 3 },
      { name: 'Tilapia', categoryId: 4, locationId: 3, seasonId: 4 },
      { name: 'Sardine', categoryId: 4, locationId: 3, seasonId: 1 },
      { name: 'Sardine', categoryId: 4, locationId: 3, seasonId: 3 },
      { name: 'Sardine', categoryId: 4, locationId: 3, seasonId: 4 },
      { name: 'Red Mullet', categoryId: 4, locationId: 3, seasonId: 3 },
      { name: 'Red Mullet', categoryId: 4, locationId: 3, seasonId: 4 },

      // fishes - mountain
      { name: 'Bullhead', categoryId: 4, locationId: 4 },
      { name: 'Sturgeon', categoryId: 4, locationId: 4, seasonId: 2 },
      { name: 'Sturgeon', categoryId: 4, locationId: 4, seasonId: 4 },
      { name: '', categoryId: 4, locationId: 4 },
      { name: '', categoryId: 4, locationId: 4 },
      { name: '', categoryId: 4, locationId: 4 },

      // fishes - witchs swamp
      // fishes - desert
      // fishes - ginger island
      {name:'Lionfish', categoryId: 4 , locationId: 8},
      {name:'Blue Discus', categoryId: 4 , locationId: 8},
      {name:'Midnight Carp', categoryId: 4 , locationId: 8},
      {name:'', categoryId: 4 , locationId: 8},
      // fishes - sewers
      {name:'Slimejack', categoryId: 4, locationId: 9, },
			// minerals
			// crops
      // crops - spring
      { name:'Blue Jazz', categoryId:6, locationId:6, seasonId:1 },
      { name:'Carrot', categoryId:6, locationId:6, seasonId:1 },
      { name:'Cauliflower', categoryId:6, locationId:6, seasonId:1 },
      { name:'Coffee Bean', categoryId:6, locationId:6, seasonId:1 },
      { name:'Garlic', categoryId:6, locationId:6, seasonId:1 },
      { name:'Green Bean', categoryId:6, locationId:6, seasonId:1 },
      { name:'Kale', categoryId:6, locationId:6, seasonId:1 },
      { name:'Parsnip', categoryId:6, locationId:6, seasonId:1 },
      { name:'Potato', categoryId:6, locationId:6, seasonId:1 },
      { name:'Rhubarb', categoryId:6, locationId:6, seasonId:1 },
      { name:'Strawberry', categoryId:6, locationId:6, seasonId:1 },
      { name:'Tulip', categoryId:6, locationId:6, seasonId:1 },
      { name:'Unmilled Rice', categoryId:6, locationId:6, seasonId:1 },
      { name:'Ancient Fruit', categoryId:6, locationId:6, seasonId:1 },
      { name:'Spring Seeds', categoryId:6, locationId:6, seasonId:1 },


      // crops - summer
      { name:'Coffee Bean', categoryId:6, locationId:6, seasonId:2 },
      { name:'Blueberry', categoryId:6, locationId:6, seasonId:2 },
      { name:'Corn', categoryId:6, locationId:6, seasonId:2 },
      { name:'Hops', categoryId:6, locationId:6, seasonId:2 },
      { name:'Hot Pepper', categoryId:6, locationId:6, seasonId:2 },
      { name:'Melon', categoryId:6, locationId:6, seasonId:2 },
      { name:'Poppy', categoryId:6, locationId:6, seasonId:2 },
      { name:'Radish', categoryId:6, locationId:6, seasonId:2 },
      { name:'Red Cabbage', categoryId:6, locationId:6, seasonId:2 },
      { name:'Starfruit', categoryId:6, locationId:6, seasonId:2 },
      { name:'Summer Spangle', categoryId:6, locationId:6, seasonId:2 },
      { name:'Summer Squash', categoryId:6, locationId:6, seasonId:2 },
      { name:'Sunflower', categoryId:6, locationId:6, seasonId:2 },
      { name:'Tomato', categoryId:6, locationId:6, seasonId:2 },
      { name:'Wheat', categoryId:6, locationId:6, seasonId:2 },
      { name:'Ancient Fruit', categoryId:6, locationId:6, seasonId:2 },
      { name:'Pineapple', categoryId:6, locationId:6, seasonId:2 },
      { name:'Taro Root', categoryId:6, locationId:6, seasonId:2 },
      { name:'Summer Seeds', categoryId:6, locationId:6, seasonId:2 },

      // crops - fall
      { name:'Corn', categoryId:6, locationId:6, seasonId:3 },
      { name:'Sunflower', categoryId:6, locationId:6, seasonId:3 },
      { name:'Wheat', categoryId:6, locationId:6, seasonId:3 },
      { name:'Amaranth', categoryId:6, locationId:6, seasonId:3 },
      { name:'Artichoke', categoryId:6, locationId:6, seasonId:3 },
      { name:'Beet', categoryId:6, locationId:6, seasonId:3 },
      { name:'Bok Choy', categoryId:6, locationId:6, seasonId:3 },
      { name:'Broccoli', categoryId:6, locationId:6, seasonId:3 },
      { name:'Cranberries', categoryId:6, locationId:6, seasonId:3 },
      { name:'Eggplant', categoryId:6, locationId:6, seasonId:3 },
      { name:'Fairy Rose', categoryId:6, locationId:6, seasonId:3 },
      { name:'Grape', categoryId:6, locationId:6, seasonId:3 },
      { name:'Pumpkin', categoryId:6, locationId:6, seasonId:3 },
      { name:'Yam', categoryId:6, locationId:6, seasonId:3 },
      { name:'Ancient Fruit', categoryId:6, locationId:6, seasonId:3 },
      { name:'Fall Seeds', categoryId:6, locationId:6, seasonId:3 },

      // crops - winter?
      { name:'Powdermelon', categoryId:6, locationId:6, seasonId:4 },
      { name:'Winter Seeds', categoryId:6, locationId:6, seasonId:4 },

      // crops - year- round?
      { name:'Fiber', categoryId:6, locationId:1, seasonId:5 },
      { name:'Fiber', categoryId:6, locationId:2, seasonId:5 },
      { name:'Fiber', categoryId:6, locationId:4, seasonId:5 },
      { name:'Fiber', categoryId:6, locationId:6, seasonId:5 },
      { name:'Mixed Flower Seeds', categoryId:6, locationId:6, seasonId:5 },
      { name:'Mixed Seeds', categoryId:6, locationId:6, seasonId:5 },
      { name:'Pineapple', categoryId:6, locationId:8, seasonId:5 },
      { name:'Taro Root', categoryId:6, locationId:8, seasonId:5 },


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
