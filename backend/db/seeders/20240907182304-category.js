'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    // {name:'Flowers'}, // not sure if I want to keep this under crops / foraging; maybe add this in for future subcategory feature
    // {name:'Crafting'}, - subcategory under recipes, leave for future implementation
    // {name:'Fruits'}, //maybe? might fall under crops or trees
    // artisan goods - beer, cheese, tree sap
    // recipes - food, life elixer, monster musk
    // foraging - fruit
    // fishes - fish, treasure chest
    // crops - vegetables, flower, fruits farms (not including fruit trees)
    // trees - sapling, seeds, trees, fruit from fruit trees
    // animals - eggs, milk, slime, wool, truffle, feathers
    // trinkets - parrot egg, basilik,
    // resources - bone fragments, clay, coal, hardwood, gold bar
    // trash - jojo drink
    // artifacts - ancient sword
    // special -Dragon tooth, stardrop tea, golden pumpkin, magic rock candy
    // ingredients - Wheat flour, sugar, oil
    // monster loot - solar essence
    return queryInterface.bulkInsert('Categories',[
      {name:'Artisan Goods'},
      {name:'Recipes'},
      {name:'Foraging'},
      {name:'Fishes'},
      {name:'Minerals'},
      {name:'Crops'},
      {name:'Trees'},
      {name:'Books'},
      {name:'Animals'},
      {name:'Trinkets'},
      {name:'Resources'},
      {name:'Trash'},
      {name:'Artifacts'},
      {name:'Special'},
      {name:'Ingredients'},
      {name:'Monster Loot'}
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Categories', null)
  }
};
