"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("Gift_Buildings", {
			giftId: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: {
					model: "Gifts",
					key: "id",
				},
			},
			buildingId: {
				type: Sequelize.INTEGER,
				allowNull: true,
				references: {
					model: "Buildings",
					key: "id",
				},
			}
		});
    // add the composite primary key
    await queryInterface.addConstraint('Gift_Buildings',{
      fields:['giftId','buildingId'],
      type: 'primary key',
      name: 'pkGiftBuilding'
    })
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable("Gift_Buildings");
	},
};
