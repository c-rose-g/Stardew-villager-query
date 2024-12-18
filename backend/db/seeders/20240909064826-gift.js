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
          - not including legendary fish I and II
          - geode minerals will be added later - need to implment id for magma geode, geode, omni geode
          - not adding frozen geode - need subcategory for geodes
          - add universal gifts
          *FIXME - Check each line and make sure it has the right fields, nullable and non-nullable
          *FIXME - Check relationship on gifts to seasons, a gift can belong to many seasons, and a season can belong to many gifts
          */
		return queryInterface.bulkInsert("Gifts", [
			{ name: "Honey" },
			{ name: "Wine" },
			{ name: "Pale Ale" },
			{ name: "Beer" },
			{ name: "Cheese" },
			{ name: "Goat Cheese" },
			{ name: "Mead" },
			{ name: "Coffee" },
			{ name: "Green Tea" },
			{ name: "Juice" },
			{ name: "Cloth" },
			{ name: "Dinosaur Mayonnaise" },
			{ name: "Duck Mayonnaise" },
			{ name: "Mayonnaise" },
			{ name: "Void Mayonnaise" },
			{ name: "Truffle Oil" },
			{ name: "Oil" },
			{ name: "Wheat Flour" },
			{ name: "Sugar" },
			{ name: "Rice" },
			{ name: "Vinegar" },
			{ name: "Aged Roe" },
			{ name: "Caviar" },
			{ name: "Jelly" },
			{ name: "Pickle" },
			{ name: "Smoked Fish" },
			{ name: "Dried Mushroom" },
			{ name: "Dried Fruit" },
			{ name: "Raisin" },
			{ name: "Maple Syrup" },
			{ name: "Oak Resin" },
			{ name: "Pine Tar" },
			{ name: "Mystic Syrup" },
			{ name: "Fried Egg" },
			{ name: "Omelet" },
			{ name: "Salad" },
			{ name: "Cheese Cauliflower" },
			{ name: "Baked Fish" },
			{ name: "Parsnip Soup" },
			{ name: "Vegetable Medley" },
			{ name: "Complete Breakfast" },
			{ name: "Fried Calamari" },
			{ name: "Strange Bun" },
			{ name: "Lucky Lunch" },
			{ name: "Fried Mushroom" },
			{ name: "Pizza" },
			{ name: "Bean Hotpot" },
			{ name: "Glazed Yams" },
			{ name: "Carp Surprise" },
			{ name: "Hashbrowns" },
			{ name: "Pancakes" },
			{ name: "Salmon Dinner" },
			{ name: "Blueberry Tart" },
			{ name: "Super Meal" },
			{ name: "Stuffing" },
			{ name: "Fish Taco" },
			{ name: "Crispy Bass" },
			{ name: "Pepper Poppers" },
			{ name: "Bread" },
			{ name: "Tom Kha Soup" },
			{ name: "Trout Soup" },
			{ name: "Chocolate Cake" },
			{ name: "Pink Cake" },
			{ name: "Rhubarb Pie" },
			{ name: "Cookie" },
			{ name: "Spaghetti" },
			{ name: "Fried Eel" },
			{ name: "Spicy Eel" },
			{ name: "Sashimi" },
			{ name: "Maki Roll" },
			{ name: "Tortilla" },
			{ name: "Red Plate" },
			{ name: "Eggplant Parmesan" },
			{ name: "Rice Pudding" },
			{ name: "Ice Cream" },
			{ name: "Autumn's Bounty" },
			{ name: "Pumpkin Soup" },
			{ name: "Cranberry Sauce" },
			{ name: "Farmer's Lunch" },
			{ name: "Survival Burger" },
			{ name: "Dish O' The Sea" },
			{ name: "Miner's Treat" },
			{ name: "Roots Platter" },
			{ name: "Triple Shot Espresso" },
			{ name: "Seafoam Pudding" },
			{ name: "Algae Soup" },
			{ name: "Pale Broth" },
			{ name: "Plum Pudding" },
			{ name: "Artichoke Dip" },
			{ name: "Stir Fry" },
			{ name: "Roasted Hazelnuts" },
			{ name: "Pumpkin Pie" },
			{ name: "Radish Salad" },
			{ name: "Fruit Salad" },
			{ name: "Blackberry Cobbler" },
			{ name: "Cranberry Candy" },
			{ name: "Bruschetta" },
			{ name: "Coleslaw" },
			{ name: "Fiddlehead Risotto" },
			{ name: "Poppyseed Muffin" },
			{ name: "Chowder" },
			{ name: "Fish Stew" },
			{ name: "Escargot" },
			{ name: "Lobster Bisque" },
			{ name: "Maple Bar" },
			{ name: "Crab Cakes" },
			{ name: "Shrimp Cocktail" },
			{ name: "Ginger Ale" },
			{ name: "Banana Pudding" },
			{ name: "Mango Sticky Rice" },
			{ name: "Poi" },
			{ name: "Tropical Curry" },
			{ name: "Squid Ink Ravioli" },
			{ name: "Moss Soup" },
			{ name: "Sap" },
			{ name: "Common Mushroom" },
			{ name: "Daffodil" },
			{ name: "Dandelion" },
			{ name: "Leek" },
			{ name: "Morel" },
			{ name: "Salmonberry" },
			{ name: "Spring Onion" },
			{ name: "Wild Horseradish" },
			{ name: "Fiddlehead Fern" },
			{ name: "Spicy Berry" },
			{ name: "Sweet Pea" },
			{ name: "Rainbow Shell" },
			{ name: "Blackberry" },
			{ name: "Chanterelle" },
			{ name: "Hazelnut" },
			{ name: "Wild Plum" },
			{ name: "Crocus" },
			{ name: "Crystal Fruit" },
			{ name: "Holly" },
			{ name: "Snow Yam" },
			{ name: "Winter Root" },
			{ name: "Nautilus Shell" },
			{ name: "Clam" },
			{ name: "Cockle" },
			{ name: "Coral" },
			{ name: "Mussel" },
			{ name: "Oyster" },
			{ name: "Sea Urchin" },
			{ name: "Seaweed" },
			{ name: "Cave Carrot" },
			{ name: "Red Mushroom" },
			{ name: "Purple Mushroom" },
			{ name: "Cactus Fruit" },
			{ name: "Coconut" },
			{ name: "Ginger" },
			{ name: "Magma Cap" },
			{ name: "Smallmouth Bass" },
			{ name: "Pike" },
			{ name: "Wallaye" },
			{ name: "Perch" },
			{ name: "Salmon" },
			{ name: "Lingcod" },
			{ name: "Catfish" },
			{ name: "Rainbow Trout" },
			{ name: "Dorado" },
			{ name: "Chub" },
			{ name: "Goby" },
			{ name: "Bream" },
			{ name: "Sunfish" },
			{ name: "Tiger Trout" },
			{ name: "Shad" },
			{ name: "Woodskip" },
			{ name: "Sea Cucumber" },
			{ name: "Albacore" },
			{ name: "Anchovy" },
			{ name: "Tilapia" },
			{ name: "Sardine" },
			{ name: "Red Mullet" },
			{ name: "Herring" },
			{ name: "Eel" },
			{ name: "Red Snapper" },
			{ name: "Squid" },
			{ name: "Halibut" },
			{ name: "Pufferfish" },
			{ name: "Tuna" },
			{ name: "Octopus" },
			{ name: "Super Cucumber" },
			{ name: "Flounder" },
			{ name: "Bullhead" },
			{ name: "Sturgeon" },
			{ name: "Ice Pip" },
			{ name: "Lava Eel" },
			{ name: "Largemouth Bass" },
			{ name: "Carp" },
			{ name: "Void Salmon" },
			{ name: "Sandfish" },
			{ name: "Stonefish" },
			{ name: "Scorpion Carp" },
			{ name: "Ghostfish" },
			{ name: "Lionfish" },
			{ name: "Blue Discus" },
			{ name: "Midnight Carp" },
			{ name: "Stingray" },
			{ name: "Slimejack" },
			{ name: "Amethyst" },
			{ name: "Aquamarine" },
			{ name: "Diamond" },
			{ name: "Emerald" },
			{ name: "Jade" },
			{ name: "Prismatic Shard" },
			{ name: "Ruby" },
			{ name: "Topaz" },
			{ name: "Earth Crystal" },
			{ name: "Fire Quartz" },
			{ name: "Frozen Tear" },
			{ name: "Quartz" },
			{ name: "Blue Jazz" },
			{ name: "Carrot" },
			{ name: "Cauliflower" },
			{ name: "Coffee Bean" },
			{ name: "Garlic" },
			{ name: "Green Bean" },
			{ name: "Kale" },
			{ name: "Parsnip" },
			{ name: "Potato" },
			{ name: "Rhubarb" },
			{ name: "Strawberry" },
			{ name: "Tulip" },
			{ name: "Unmilled Rice" },
			{ name: "Ancient Fruit" },
			{ name: "Spring Seeds" },
			{ name: "Blueberry" },
			{ name: "Corn" },
			{ name: "Hops" },
			{ name: "Hot Pepper" },
			{ name: "Melon" },
			{ name: "Poppy" },
			{ name: "Radish" },
			{ name: "Red Cabbage" },
			{ name: "Starfruit" },
			{ name: "Summer Spangle" },
			{ name: "Summer Squash" },
			{ name: "Sunflower" },
			{ name: "Tomato" },
			{ name: "Wheat" },
			{ name: "Pineapple" },
			{ name: "Taro Root" },
			{ name: "Summer Seeds" },
			{ name: "Amaranth" },
			{ name: "Artichoke" },
			{ name: "Beet" },
			{ name: "Bok Choy" },
			{ name: "Broccoli" },
			{ name: "Cranberries" },
			{ name: "Eggplant" },
			{ name: "Fairy Rose" },
			{ name: "Grape" },
			{ name: "Pumpkin" },
			{ name: "Yam" },
			{ name: "Fall Seeds" },
			{ name: "Powdermelon" },
			{ name: "Winter Seeds" },
			{ name: "Fiber" },
			{ name: "Mixed Flower Seeds" },
			{ name: "Mixed Seeds" },
			{ name: "Apple" },
			{ name: "Apricot" },
			{ name: "Banana" },
			{ name: "Cherry" },
			{ name: "Mango" },
			{ name: "Orange" },
			{ name: "Peach" },
			{ name: "Pomegranate" },
			{ name: "Dinosaur Egg" },
			{ name: "Duck Egg" },
			{ name: "Duck Feather" },
			{ name: "Egg" },
			{ name: "Goat Milk" },
			{ name: "Milk" },
			{ name: "Field Snack" },
			{ name: "Tea Leaves" },
			{ name: "Gold Bar" },
			{ name: "Iridium Bar" },
			{ name: "Omni Geode" },
			{ name: "Copper Bar" },
			{ name: "Iron Bar" },
			{ name: "Coal" },
			{ name: "Gold Ore" },
			{ name: "Iridium Ore" },
			{ name: "Refined Quartz" },
			{ name: "Lemon Stone" },
			{ name: "Solar Essence" },
			{ name: "Void Essence" },
			{ name: "Wool" },
			{ name: "Lobster" }, //290
			{ name: "Squid Ink" },
			{ name: "Clay" },
			{ name: "Truffle" }, //293
			{ name: "Large Goat Milk" },
			{ name: "Golden Pumpkin" },
			{ name: "Magic Rock Candy" },
			{ name: "Pearl" },
			{ name: "Rabbit's Foot" },
			{ name: "Stardrop Tea" }, //299
			{ name: "Pina Colada" },
			{ name: "Sweet Gem Berry" },
			{ name: "Large Milk" },
			{ name: "Driftwood" },
			{ name: "Void Egg" },
			{ name: "Jack-O-Latern" },
			{ name: "Green Algae" }, //306
			{ name: "White Algae" },
			{ name: "Spice Berry" }, //307
			{ name: "Joja Cola" }, //308
			{ name: "Frog Egg" },
			{ name: "Snail" }, //311
			{ name: "Pearl" },
			{ name: "Monster Compendium" },
			{ name: "Monster Musk" }, //314
			{ name: "Life Elixir" },
			{ name: "Treasure Chest" }, //316
			{ name: "Dried Mushrooms" }, //317
			{ name: "Dried Fruit" }, //318
			{ name: "Raisins" }, //319
			{ name: "Roe" },
			{ name: "Qi Fruit" }, //321
		]);
	},

	async down(queryInterface, Sequelize) {
		/**
		 * Add commands to revert seed here.
		 *
		 * Example:
		 * await queryInterface.bulkDelete('People', null, {});
		 */
		return queryInterface.bulkDelete("Gifts", null);
	},
};
