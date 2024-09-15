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
				seasonId:3,
				date:13,
				isFestival: false,
				isBirthday: true,
			},
			{
				villagerBirthdayId: 2,
				seasonId:2,
        date:13,
				isFestival: false,
				isBirthday: true,
			},
      {
				villagerBirthdayId: 3,
				seasonId:4,
        date:7,
				isFestival: false,
				isBirthday: true,
			},{
				villagerBirthdayId: 4,
				seasonId:4,
        date:26,
				isFestival: false,
				isBirthday: true,
			},{
				villagerBirthdayId: 5,
				seasonId:2,
        date:19,
				isFestival: false,
				isBirthday: true,
			},
			// {
			// 	villagerBirthdayId: 6,
			// 	seasonId:2,
      //   date: 22,
			// 	isFestival: false,
			// 	isBirthday: true,
			// },{
			// 	villagerBirthdayId: 7,
			// 	seasonId: 1,
      //   date: 27,
			// 	isFestival: false,
			// 	isBirthday: true,
			// },{
			// 	villagerBirthdayId: 8,
			// 	seasonId: 3,
      //   date: 5,
			// 	isFestival: false,
			// 	isBirthday: true,
			// },
      // {
			// 	villagerBirthdayId: 9,
			// 	seasonId: 4,
      //   date: 20,
			// 	isFestival: false,
			// 	isBirthday: true,
			// },
      // {
			// 	villagerBirthdayId: 10,
			// 	seasonId: 3,
      //   date: 24,
			// 	isFestival: false,
			// 	isBirthday: true,
			// },{
			// 	villagerBirthdayId: 11,
			// 	seasonId: 2,
      //   date: 8,
			// 	isFestival: false,
			// 	isBirthday: true,
			// },{
			// 	villagerBirthdayId: 12,
			// 	seasonId: 1,
      //   date: 14,
			// 	isFestival: false,
			// 	isBirthday: true,
			// },
      // {
			// 	villagerBirthdayId: 13,
			// 	seasonId: 4,
      //   date: 14,
			// 	isFestival: false,
			// 	isBirthday: true,
			// },{
			// 	villagerBirthdayId: 14,
			// 	seasonId: 2,
      //   date: 4,
			// 	isFestival: false,
			// 	isBirthday: true,
			// },{
			// 	villagerBirthdayId: 15,
			// 	seasonId: 3,
      //   date: 11,
			// 	isFestival: false,
			// 	isBirthday: true,
			// },
      // {
			// 	villagerBirthdayId: 16,
			// 	seasonId: 1,
      //   date: 4,
			// 	isFestival: false,
			// 	isBirthday: true,
			// },
      // {
			// 	villagerBirthdayId: 17,
			// 	seasonId: 4,
      //   date: 1,
			// 	isFestival: false,
			// 	isBirthday: true,
			// },
      // {
			// 	villagerBirthdayId: 18,
			// 	seasonId: 4,
      //   date: 23,
			// 	isFestival: false,
			// 	isBirthday: true,
			// },
      // {
			// 	villagerBirthdayId: 19,
			// 	seasonId: 2,
      //   date: 26,
			// 	isFestival: false,
			// 	isBirthday: true,
			// },
      // {
			// 	villagerBirthdayId: 20,
			// 	seasonId: 1,
      //   date: 7,
			// 	isFestival: false,
			// 	isBirthday: true,
			// },
      // {
			// 	villagerBirthdayId: 21,
			// 	seasonId: 4,
      //   date: 3,
			// 	isFestival: false,
			// 	isBirthday: true,
			// },
      // {
			// 	villagerBirthdayId: 22,
			// 	seasonId: 3,
      //   date: 18,
			// 	isFestival: false,
			// 	isBirthday: true,
			// },
      // {
			// 	villagerBirthdayId: 23,
			// 	seasonId: 2,
      //   date: 10,
			// 	isFestival: false,
			// 	isBirthday: true,
			// },
      // {
			// 	villagerBirthdayId: 24,
			// 	seasonId: 1,
      //   date: 18,
			// 	isFestival: false,
			// 	isBirthday: true,
			// },
      // {
			// 	villagerBirthdayId: 25,
			// 	seasonId: 3,
      //   date: 2,
			// 	isFestival: false,
			// 	isBirthday: true,
			// },
      // {
			// 	villagerBirthdayId: 26,
			// 	seasonId: 1,
      //   date: 26,
			// 	isFestival: false,
			// 	isBirthday: true,
			// },
      // {
			// 	villagerBirthdayId: 27,
			// 	seasonId: 3,
      //   date: 21,
			// 	isFestival: false,
			// 	isBirthday: true,
			// },
      // {
			// 	villagerBirthdayId: 28,
			// 	seasonId: 1,
      //   date: 17,
			// 	isFestival: false,
			// 	isBirthday: true,
			// },
      // {
			// 	villagerBirthdayId: 29,
			// 	seasonId: 3,
      //   date: 15,
			// 	isFestival: false,
			// 	isBirthday: true,
			// },
      // {
			// 	villagerBirthdayId: 30,
			// 	seasonId: 4,
      //   date: 10,
			// 	isFestival: false,
			// 	isBirthday: true,
			// },
      // {
			// 	villagerBirthdayId: 31,
			// 	seasonId: 1,
      //   date: 20,
			// 	isFestival: false,
			// 	isBirthday: true,
			// },
      // {
			// 	villagerBirthdayId: 32,
			// 	seasonId: 1,
      //   date: 10,
			// 	isFestival: false,
			// 	isBirthday: true,
			// },
      // {
			// 	villagerBirthdayId: 33,
			// 	seasonId: 2,
      //   date: 24,
			// 	isFestival: false,
			// 	isBirthday: true,
			// },
      // {
			// 	villagerBirthdayId: 34,
			// 	seasonId: 4,
      //   date: 17,
			// 	isFestival: false,
			// 	isBirthday: true,
			// },
		]);
	},

	async down(queryInterface, Sequelize) {
		/**
		 * Add commands to revert seed here.
		 *
		 * Example:
		 * await queryInterface.bulkDelete('People', null, {});
		 */
		return queryInterface.bulkDelete("Calenders", null);
	},
};
