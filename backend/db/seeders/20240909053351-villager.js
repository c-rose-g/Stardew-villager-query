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
			{
				id: 1,
				name: "Abigail",
				imageURL:
					"https://stardewvalleywiki.com/mediawiki/images/8/88/Abigail.png",
				sex: "Female",
				marriage: true,
				buildingId: 6,
			},
			{
				id: 2,
				name: "Alex",
				imageURL:
					"https://stardewvalleywiki.com/mediawiki/images/0/04/Alex.png",
				sex: "Male",
				marriage: true,
				houseId: 1,
			},
			{
				id: 3,
				name: "Caroline",
				imageURL:
					"https://stardewvalleywiki.com/mediawiki/images/8/87/Caroline.png",
				sex: "Female",
				marriage: false,
				buildingId: 6,
			},
			{
				id: 4,
				name: "Clint",
				imageURL:
					"https://stardewvalleywiki.com/mediawiki/images/3/31/Clint.png",
				sex: "Male",
				marriage: true,
				buildingId: 1,
			},
			{
				id: 5,
				name: "Demetrius",
				imageURL:
					"https://stardewvalleywiki.com/mediawiki/images/f/f9/Demetrius.png",
				sex: "Male",
				marriage: false,
				houseId: 3,
			},
			{
				id: 6,
				name: "Drawf",
				imageURL:
					"https://stardewvalleywiki.com/mediawiki/images/e/ed/Dwarf.png",
				sex: "Male",
				marriage: false,
				houseId: 7,
			},
			{
				id: 7,
				name: "Emily",
				imageURL:
					"https://stardewvalleywiki.com/mediawiki/images/2/28/Emily.png",
				sex: "Female",
				marriage: true,
				houseId: 4,
			},
			{
				id: 8,
				name: "Elliot",
				imageURL:
					"https://stardewvalleywiki.com/mediawiki/images/b/bd/Elliott.png",
				sex: "Male",
				marriage: true,
				houseId: 10,
			},
			{
				id: 9,
				name: "Evelyn",
				imageURL:
					"https://stardewvalleywiki.com/mediawiki/images/8/8e/Evelyn.png",
				sex: "Female",
				marriage: false,
				houseId: 1,
			},
			{
				id: 10,
				name: "George",
				imageURL:
					"https://stardewvalleywiki.com/mediawiki/images/7/78/George.png",
				sex: "Male",
				marriage: false,
				houseId: 1,
			},
			{
				id: 11,
				name: "Gus",
				imageURL: "https://stardewvalleywiki.com/mediawiki/images/5/52/Gus.png",
				sex: "Male",
				marriage: false,
				buildingId: 7,
			},
			{
				id: 12,
				name: "Haley",
				imageURL:
					"https://stardewvalleywiki.com/mediawiki/images/1/1b/Haley.png",
				sex: "Female",
				marriage: true,
				houseId: 4,
			},
			{
				id: 13,
				name: "Harvey",
				imageURL:
					"https://stardewvalleywiki.com/mediawiki/images/9/95/Harvey.png",
				sex: "Male",
				marriage: true,
				buildingId: 3,
			},
			{
				id: 14,
				name: "Jas",
				imageURL: "https://stardewvalleywiki.com/mediawiki/images/5/55/Jas.png",
				sex: "Female",
				marriage: false,
				buildingId: 9,
			},
			{
				id: 15,
				name: "Jodi",
				imageURL:
					"https://stardewvalleywiki.com/mediawiki/images/4/41/Jodi.png",
				sex: "Female",
				marriage: false,
				houseId: 2,
			},
			{
				id: 16,
				name: "Kent",
				imageURL:
					"https://stardewvalleywiki.com/mediawiki/images/9/99/Kent.png",
				sex: "Male",
				marriage: false,
				houseId: 2,
			},
			{
				id: 17,
				name: "Krobus",
				imageURL:
					"https://stardewvalleywiki.com/mediawiki/images/7/71/Krobus.png",
				sex: "Male",
				marriage: false,
				buildingId: 8,
			},
			{
				id: 18,
				name: "Leah",
				imageURL:
					"https://stardewvalleywiki.com/mediawiki/images/e/e6/Leah.png",
				sex: "Female",
				marriage: true,
				houseId: 5,
			},
			{
				id: 19,
				name: "Leo",
				imageURL: "https://stardewvalleywiki.com/mediawiki/images/1/1d/Leo.png",
				sex: "Male",
				marriage: false,
				houseId: 12,
			},
			{
				id: 20,
				name: "Lewis",
				imageURL:
					"https://stardewvalleywiki.com/mediawiki/images/2/2b/Lewis.png",
				sex: "Male",
				marriage: false,
				houseId: 8,
			},
			{
				id: 21,
				name: "Linus",
				imageURL:
					"https://stardewvalleywiki.com/mediawiki/images/3/31/Linus.png",
				sex: "Male",
				marriage: false,
				houseId: 9,
			},
			{
				id: 22,
				name: "Marnie",
				imageURL:
					"https://stardewvalleywiki.com/mediawiki/images/5/52/Marnie.png",
				sex: "Female",
				marriage: false,
				buildingId: 9,
			},
			{
				id: 23,
				name: "Maru",
				imageURL:
					"https://stardewvalleywiki.com/mediawiki/images/f/f8/Maru.png",
				sex: "Female",
				marriage: true,
				houseId: 3,
			},
			{
				id: 24,
				name: "Pam",
				imageURL: "https://stardewvalleywiki.com/mediawiki/images/d/da/Pam.png",
				sex: "Female",
				marriage: false,
				houseId: 6,
			},
			{
				id: 25,
				name: "Penny",
				imageURL:
					"https://stardewvalleywiki.com/mediawiki/images/a/ab/Penny.png",
				sex: "Female",
				marriage: true,
				houseId: 6,
			},
			{
				id: 26,
				name: "Pierre",
				imageURL:
					"https://stardewvalleywiki.com/mediawiki/images/7/7e/Pierre.png",
				sex: "Female",
				marriage: false,
				buildingId: 6,
			},
			{
				id: 27,
				name: "Robin",
				imageURL:
					"https://stardewvalleywiki.com/mediawiki/images/1/1b/Robin.png",
				sex: "Female",
				marriage: false,
				houseId: 3,
			},
			{
				id: 28,
				name: "Sam",
				imageURL: "https://stardewvalleywiki.com/mediawiki/images/9/94/Sam.png",
				sex: "Male",
				marriage: true,
				houseId: 2,
			},
			{
				id: 29,
				name: "Sandy",
				imageURL:
					"https://stardewvalleywiki.com/mediawiki/images/4/4e/Sandy.png",
				sex: "Female",
				marriage: false,
				buildingId: 25,
			},
			{
				id: 30,
				name: "Sebastian",
				imageURL:
					"https://stardewvalleywiki.com/mediawiki/images/a/a8/Sebastian.png",
				sex: "Male",
				marriage: true,
				houseId: 3,
			},
			{
				id: 31,
				name: "Shane",
				imageURL:
					"https://stardewvalleywiki.com/mediawiki/images/8/8b/Shane.png",
				sex: "Male",
				marriage: true,
				buildingId: 9,
			},
			{
				id: 32,
				name: "Vincent",
				imageURL:
					"https://stardewvalleywiki.com/mediawiki/images/f/f1/Vincent.png",
				sex: "Male",
				marriage: false,
				houseId: 2,
			},
			{
				id: 33,
				name: "Willy",
				imageURL:
					"https://stardewvalleywiki.com/mediawiki/images/8/82/Willy.png",
				sex: "Male",
				marriage: false,
				buildingId: 14,
			},
			{
				id: 34,
				name: "Wizard",
				imageURL:
					"https://stardewvalleywiki.com/mediawiki/images/c/c7/Wizard.png",
				sex: "Male",
				marriage: false,
				buildingId: 13,
			},
		]);
	},

	async down(queryInterface, Sequelize) {
		/**
		 * Add commands to revert seed here.
		 *
		 * Example:
		 * await queryInterface.bulkDelete('People', null, {});
		 */
		return queryInterface.bulkDelete("Villagers", null, {});
	},
};
