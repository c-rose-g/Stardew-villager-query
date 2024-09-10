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
    // 1. artisan goods - beer, cheese, tree sap
    // 2. recipes - food, life elixer, monster musk
    // 3. foraging - fruit
    // 4. fishes - fish, treasure chest
    // 5. crops - vegetables, flower, fruits farms (not including fruit trees)
    // 6. trees - sapling, seeds, trees, fruit from fruit trees
    // 7. animals - eggs, milk, slime, wool, truffle, feathers
    // 8. trinkets - parrot egg, basilik,
    // 9. resources - bone fragments, clay, coal, hardwood, gold bar
    // 10. trash - jojo drink
    // 11. artifacts - ancient sword
    // 12. special -Dragon tooth, stardrop tea, golden pumpkin, magic rock candy
    // 13. ingredients - Wheat flour, sugar, oil
    // 14. monster loot - solar essence
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
