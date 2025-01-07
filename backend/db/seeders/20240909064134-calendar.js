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
		 * eventName and villagerBirthdayId are nullable
		 */
		return queryInterface.bulkInsert("Calendars", [
			{
				villagerBirthdayId: 1,
				seasonId: 3,
				eventName: null,
				date: 13,
				isFestival: false,
				isBirthday: true,
			},
			{
				villagerBirthdayId: 2,
				seasonId: 2,
				eventName: null,

				date: 13,
				isFestival: false,
				isBirthday: true,
			},
			{
				villagerBirthdayId: 3,
				seasonId: 4,
				eventName: null,

				date: 7,
				isFestival: false,
				isBirthday: true,
			},
			{
				villagerBirthdayId: 4,
				seasonId: 4,
				eventName: null,

				date: 26,
				isFestival: false,
				isBirthday: true,
			},
			{
				villagerBirthdayId: 5,
				seasonId: 2,
				eventName: null,

				date: 19,
				isFestival: false,
				isBirthday: true,
			},
			{
				villagerBirthdayId: 6,
				seasonId: 2,
				eventName: null,

				date: 22,
				isFestival: false,
				isBirthday: true,
			},
			{
				villagerBirthdayId: 7,
				seasonId: 1,
				eventName: null,

				date: 27,
				isFestival: false,
				isBirthday: true,
			},
			{
				villagerBirthdayId: 8,
				seasonId: 3,
				eventName: null,
				date: 5,
				isFestival: false,
				isBirthday: true,
			},
			{
				villagerBirthdayId: 9,
				seasonId: 4,
				eventName: null,

				date: 20,
				isFestival: false,
				isBirthday: true,
			},
			{
				villagerBirthdayId: 10,
				seasonId: 3,
				eventName: null,

				date: 24,
				isFestival: false,
				isBirthday: true,
			},
			{
				villagerBirthdayId: 11,
				seasonId: 2,
				eventName: null,

				date: 8,
				isFestival: false,
				isBirthday: true,
			},
			{
				villagerBirthdayId: 12,
				seasonId: 1,
				eventName: null,

				date: 14,
				isFestival: false,
				isBirthday: true,
			},
			{
				villagerBirthdayId: 13,
				seasonId: 4,
				eventName: null,

				date: 14,
				isFestival: false,
				isBirthday: true,
			},
			{
				villagerBirthdayId: 14,
				seasonId: 2,
				eventName: null,

				date: 4,
				isFestival: false,
				isBirthday: true,
			},
			{
				villagerBirthdayId: 15,
				seasonId: 3,
				date: 11,
				eventName: null,

				isFestival: false,
				isBirthday: true,
			},
			{
				villagerBirthdayId: 16,
				seasonId: 1,
				date: 4,
				eventName: null,

				isFestival: false,
				isBirthday: true,
			},
			{
				villagerBirthdayId: 17,
				seasonId: 4,
				eventName: null,

				date: 1,
				isFestival: false,
				isBirthday: true,
			},
			{
				villagerBirthdayId: 18,
				seasonId: 4,
				eventName: null,

				date: 23,
				isFestival: false,
				isBirthday: true,
			},
			{
				villagerBirthdayId: 19,
				seasonId: 2,
				eventName: null,

				date: 26,
				isFestival: false,
				isBirthday: true,
			},
			{
				villagerBirthdayId: 20,
				seasonId: 1,
				eventName: null,
				date: 7,
				isFestival: false,
				isBirthday: true,
			},
			{
				villagerBirthdayId: 21,
				seasonId: 4,
				eventName: null,
				date: 3,
				isFestival: false,
				isBirthday: true,
			},
			{
				villagerBirthdayId: 22,
				seasonId: 3,
				eventName: null,
				date: 18,
				isFestival: false,
				isBirthday: true,
			},
			{
				villagerBirthdayId: 23,
				seasonId: 2,
				eventName: null,
				date: 10,
				isFestival: false,
				isBirthday: true,
			},
			{
				villagerBirthdayId: 24,
				seasonId: 1,
				eventName: null,
				date: 18,
				isFestival: false,
				isBirthday: true,
			},
			{
				villagerBirthdayId: 25,
				seasonId: 3,
				eventName: null,
				date: 2,
				isFestival: false,
				isBirthday: true,
			},
			{
				villagerBirthdayId: 26,
				seasonId: 1,
				eventName: null,
				date: 26,
				isFestival: false,
				isBirthday: true,
			},
			{
				villagerBirthdayId: 27,
				seasonId: 3,
				eventName: null,
				date: 21,
				isFestival: false,
				isBirthday: true,
			},
			{
				villagerBirthdayId: 28,
				seasonId: 1,
				eventName: null,
				date: 17,
				isFestival: false,
				isBirthday: true,
			},
			{
				villagerBirthdayId: 29,
				seasonId: 3,
				eventName: null,
				date: 15,
				isFestival: false,
				isBirthday: true,
			},
			{
				villagerBirthdayId: 30,
				seasonId: 4,
				eventName: null,
				date: 10,
				isFestival: false,
				isBirthday: true,
			},
			{
				villagerBirthdayId: 31,
				seasonId: 1,
				eventName: null,
				date: 20,
				isFestival: false,
				isBirthday: true,
			},
			{
				villagerBirthdayId: 32,
				seasonId: 1,
				eventName: null,
				date: 10,
				isFestival: false,
				isBirthday: true,
			},
			{
				villagerBirthdayId: 33,
				eventName: null,
				seasonId: 2,
				date: 24,
				isFestival: false,
				isBirthday: true,
			},
			{
				villagerBirthdayId: 34,
				seasonId: 4,
				eventName: null,
				date: 17,
				isFestival: false,
				isBirthday: true,
			},
			// spring festivals
			{
				seasonId: 1,
				villagerBirthdayId: null,
				eventName: "Egg Festival",
				date: 13,
				isFestival: true,
				isBirthday: false,
			},
			{
				seasonId: 1,
				villagerBirthdayId: null,
				date: 15,
				eventName: "Desert Festival",
				isFestival: true,
				isBirthday: false,
			},
			{
				seasonId: 1,
				villagerBirthdayId: null,
				date: 16,
				eventName: "Desert Festival",
				isFestival: true,
				isBirthday: false,
			},
			{
				seasonId: 1,
				villagerBirthdayId: null,
				date: 17,
				eventName: "Desert Festival",
				isFestival: true,
				isBirthday: false,
			},
			{
				seasonId: 1,
				villagerBirthdayId: null,
				date: 24,
				eventName: "Flower Dance",
				isFestival: true,
				isBirthday: false,
			},
			// summer festivals
			{
				seasonId: 2,
				villagerBirthdayId: null,
				date: 11,
				eventName: "Luau",
				isFestival: true,
				isBirthday: false,
			},
			{
				seasonId: 2,
				villagerBirthdayId: null,
				date: 20,
				eventName: "Trout Derby",
				isFestival: true,
				isBirthday: false,
			},
			{
				seasonId: 2,
				villagerBirthdayId: null,
				date: 21,
				eventName: "Trout Derby",
				isFestival: true,
				isBirthday: false,
			},
			{
				seasonId: 2,
				villagerBirthdayId: null,
				date: 28,
				eventName: "Dance of the Moonlight Jellies",
				isFestival: true,
				isBirthday: false,
			},
			// fall festivals
			{
				seasonId: 3,
				villagerBirthdayId: null,
				date: 16,
				eventName: "Stardew Valley Fair",
				isFestival: true,
				isBirthday: false,
			},
			{
				seasonId: 3,
				villagerBirthdayId: null,
				date: 27,
				eventName: "Spirit's Eve",
				isFestival: true,
				isBirthday: false,
			},
			// winter festivals
			{
				seasonId: 4,
				villagerBirthdayId: null,
				date: 8,
				eventName: "Festival of Ice",
				isFestival: true,
				isBirthday: false,
			},
			{
				seasonId: 4,
				villagerBirthdayId: null,
				date: 12,
				eventName: "SquidFest",
				isFestival: true,
				isBirthday: false,
			},
			{
				seasonId: 4,
				villagerBirthdayId: null,
				date: 13,
				eventName: "SquidFest",
				isFestival: true,
				isBirthday: false,
			},
			{
				seasonId: 4,
				villagerBirthdayId: null,
				date: 15,
				eventName: "Night Market",
				isFestival: true,
				isBirthday: false,
			},
			{
				seasonId: 4,
				villagerBirthdayId: null,
				date: 16,
				eventName: "Night Market",
				isFestival: true,
				isBirthday: false,
			},
			{
				seasonId: 4,
				villagerBirthdayId: null,
				date: 17,
				eventName: "Night Market",
				isFestival: true,
				isBirthday: false,
			},
			{
				seasonId: 4,
				villagerBirthdayId: null,
				date: 25,
				eventName: "Feast of the Winter Star",
				isFestival: true,
				isBirthday: false,
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
		return queryInterface.bulkDelete("Calendars", null);
	},
};
