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
		 *   isBetaMember: false, houseId:
		 * }], {});
		 */
		return queryInterface.bulkInsert("Villagers", [
			{ name: "Abigail", sex: "Female", marriage: true, buildingId: 6 },
			{ name: "Alex", sex: "Male", marriage: true, houseId: 1 },
			{ name: "Caroline", sex: "Female", marriage: false, buildingId: 6 },
			{ name: "Clint", sex: "Male", marriage: true, buildingId: 1 },
			{ name: "Demetrius", sex: "Male", marriage: false, houseId: 3 },
			{ name: "Drawf", sex: "Male", marriage: false, houseId: 7 },
			{ name: "Emily", sex: "Female", marriage: true, houseId: 4 },
			{ name: "Elliot", sex: "Male", marriage: true, houseId: 10 },
			{ name: "Evelyn", sex: "Female", marriage: false, houseId: 1 },
			{ name: "George", sex: "Male", marriage: false, houseId: 1 },
			{ name: "Gus", sex: "Male", marriage: false, buildingId: 7 },
			{ name: "Haley", sex: "Female", marriage: true, houseId: 4 },
			{ name: "Harvey", sex: "Male", marriage: true, buildingId: 3 },
			{ name: "Jas", sex: "Female", marriage: false, buildingId: 9 },
			{ name: "Jodi", sex: "Female", marriage: false, houseId: 2 },
			{ name: "Kent", sex: "Male", marriage: false, houseId: 2 },
			{ name: "Krobus", sex: "Male", marriage: false, buildingId: 8 },
			{ name: "Leah", sex: "Female", marriage: true, houseId: 5 },
			{ name: "Leo", sex: "Male", marriage: false, houseId: 12 },
			{ name: "Lewis", sex: "Male", marriage: false, houseId: 8 },
			{ name: "Linus", sex: "Male", marriage: false, houseId: 9 },
			{ name: "Marnie", sex: "Female", marriage: false, buildingId: 9 },
			{ name: "Maru", sex: "Female", marriage: true, houseId: 3 },
			{ name: "Pam", sex: "Female", marriage: false, houseId: 6 },
			{ name: "Penny", sex: "Female", marriage: true, houseId: 6 },
			{ name: "Pierre", sex: "Female", marriage: false, buildingId: 6 },
			{ name: "Robin", sex: "Female", marriage: false, houseId: 3 },
			{ name: "Sam", sex: "Male", marriage: true, houseId: 2 },
			{ name: "Sandy", sex: "Female", marriage: false, buildingId: 25 },
			{ name: "Sebastian", sex: "Male", marriage: true, houseId: 3 },
			{ name: "Shane", sex: "Male", marriage: true, buildingId: 9 },
			{ name: "Vincent", sex: "Male", marriage: false, houseId: 2 },
			{ name: "Willy", sex: "Male", marriage: false, buildingId: 14 },
			{ name: "Wizard", sex: "Male", marriage: false, buildingId: 13 },
		]);
	},

	async down(queryInterface, Sequelize) {
		/**
		 * Add commands to revert seed here.
		 *
		 * Example:
		 * await queryInterface.bulkDelete('People', null, {});
		 */
		return queryInterface.bulkDelete("Villagers", null);
	},
};
