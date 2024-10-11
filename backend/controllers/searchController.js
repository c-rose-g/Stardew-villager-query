const {
	Building,
	Calendar,
	Category,
	Gift_Building,
	Gift_Category,
	Gift_Location,
	Gift_Season,
	Gift,
	House,
	Location,
	Preference,
	Schedule,
	Season,
	Villager_Gift,
	Villager,
	Gift_Preference,
	Villager_Location,
} = require("../db/models");

const { Op, where } = require("sequelize");
const villager = require("../db/models/villager");
// Search bar controller logic

const search = async (req, res) => {
	// const { query, type, page, size } = req.query;
	const { query } = req.query;
	console.log("this is the query hitting the backend:", query);
	try {
		let result;
		// parsedPage =
		// 	page === undefined ? 1 : page < 0 ? 1 : page > 5 ? 5 : parseInt(page);
		// parsedSize =
		// 	size === undefined ? 10 : size < 0 ? 1 : size > 10 ? 10 : parseInt(size);

		let gifts, villagers, location, building, calendar, schedule, season;

		gifts = await searchGift(query);
		villagers = await searchVillager(query);

		if (gifts) {
			result = gifts;

		} else if (villagers) {
			result = villagers;
		} else {
			return res.status(400).json({ message: "Invalid search type" });
		}
		// else if (villagers){
		// 	result = villagers

		// }
		// switch (type) {
		// 	case "gift":
		// 		result = await searchGift(query, parsedPage, parsedSize);
		// 		break;
		// 	case "villager":
		// 		result = await searchVillager(query);
		// 		break;
		// 	case "location":
		// 		result = await searchLocation(query);
		// 		break;
		// 	case "building":
		// 		result = await searchBuilding(query);
		// 		break;
		// 	case "calendar":
		// 		result = await searchCalendar(query);
		// 		break;
		// 	case "schedule":
		// 		result = await searchSchedule(query);
		// 		break;
		// 	case "season":
		// 		result = await searchSeason(query);
		// 		break;
		// 	default:
		// 		return res.status(400).json({ message: "Invalid search type" });
		// }
		return res.json(result);
	} catch (err) {
		// console.error("Error details:", err); // Log error details
		return res
			.status(500)
			.json({ message: "Error processing the search", err });
	}
};

const searchGift = async (query) => {
	try {
		const gifts = await Gift.findAll({
			where: {
				name: {
					[Op.like]: `%${query}%`,
				},
			},
			include: [
				{
					model: Villager,
					through: {
						attributes: ["villagerId", "giftId", "preferenceId"],
					},
					attributes: {
						exclude: [
							"houseId",
							"buildingId",
							"marriage",
							"sex",
							"createdAt",
							"updatedAt",
						],
					},
				},
				{
					model: Villager_Gift.scope("withPreferenceName"),
					as: "VillagerGifts",
					attributes: { exclude: ["PreferenceId"] },
				},
			],
			// limit: size,
			// offset: size * (page - 1),
		});

		if (!gifts.length) {
			// return "Gift cannot be found, please try again :)";
			return false
		}

		// if a gift has not been associated to a villager, return a message, otherwise return data
		const giftNeedsAVillager = gifts.map((gift) => {
			// jsonify the data

			const giftJSON = gift.toJSON();
			const hasVillagers =
				Array.isArray(giftJSON.Villagers) && giftJSON.Villagers.length > 0;
			const hasVillagerGifts =
				Array.isArray(giftJSON.villagerGifts) &&
				giftJSON.villagerGifts.length > 0;

			if (!hasVillagers && !hasVillagerGifts) {
				return {
					...giftJSON,
					message: "This gift has no villager associated to it yet.",
				};
			}

			return giftJSON;
		});
		return giftNeedsAVillager;
	} catch (err) {
		console.log(err);
		throw new Error("There was an error searching for gifts");
	}
};

// this has to include Villager_Gift?
// include schedule
const searchVillager = async (query) => {
	try {
		let capitalizedVillager;
		if (query.length >= 2) {
			capitalizedVillager =
				query.charAt(0).toUpperCase() + query.slice(1).toLowerCase();
		} else if (query.length === 1) {
			capitalizedVillager = query;
		}
		const villager = await Villager.findAll({
			where: {
				// name: {
				// 	[Op.like]: capitalizedVillager,
				// },
				name: capitalizedVillager,
			},
			include: [
				{
					model: Gift,
				},

			],
			// limit: size,
			// offset: size * (page - 1),
		});

		// if villager array only has 1 object, include schedule
		if (villager.length === 1) {
			id = villager[0]?.id;
			// console.log(id)
			const schedule = await Schedule.findAll({
				where: {
					villagerId: id,
				},
			});
			// console.log("Schedule:", schedule);
			// add schedule into villager, key name'Schedule', value'schedule'
			villager[0].dataValues.Schedule = schedule;
			// return [villager, schedule];
		}
		console.log('this is villager from backend server >>>', villager)
		return villager
		// if villager array has more than 1 object

		// if (villager !== null) {
		// 	villager.Gifts.forEach((gift) => {
		// 		delete gift.Villager_Gift.PreferenceId;
		// 	});
		// }
		// for (obj in villager) {
		// 	const gifts = villager.Gifts;
		// 	for (let i = 0; i < gifts.length; i++) {
		// 		let gift = gifts[i].Villager_Gift;

		// 		delete gift.PreferenceId;
		// 	}
		// }
	} catch (err) {
		console.log(err);
		throw new Error("There was an error searching for gifts");
	}
};

const searchLocation = async (query) => {
	const locationInfo = await Location.findAll({
		where: {
			name: {
				[Op.like]: `%${query}%`,
			},
		},
		include: [
			{
				model: Gift,
				through: Gift_Location,
			},
			{
				model: Villager,
				through: Villager_Location,
			},
		],
	});
	return locationInfo;
};

const searchBuilding = async (query) => {
	// Step 1: Find the building IDs that match the query
	const buildings = await Building.findAll({
		where: {
			name: {
				[Op.like]: `%${query}%`,
			},
		},
		attributes: ["id", "name"],
		include: {
			model: Gift,
			through: {
				model: Gift_Building,
			},
		},
	});

	return buildings;
};

const searchCalendar = async (query) => {
	// returns information regarding this particular day, if it an events exists
	// if no event exists on such day, then return 'no event occured on this day'
	try {
		let season;
		let date;
		if (query.length > 2) {
			[season, date] = query.split(" ");
		} else if (Number(query)) {
			date = query;
		}

		if (season && date) {
			const capitalizedSeason =
				season.charAt(0).toUpperCase() + season.slice(1).toLowerCase();
			const findSeason = await Season.findOne({
				where: {
					name: capitalizedSeason,
				},
				attributes: ["id", "name"],
			});

			const event = await Calendar.findOne({
				where: {
					seasonId: findSeason.id,
					date: date,
				},
			});

			if (event.isBirthday) {
				let villager = await Villager.findOne({
					where: {
						id: {
							[Op.is]: event.villagerBirthdayId,
						},
					},
				});

				// if it's an event, return information on the festival
				return [event, villager];
			}
			return event;
		} else if (!date && season) {
			const capitalizedSeason =
				season.charAt(0).toUpperCase() + season.slice(1).toLowerCase();
			const findSeason = await Season.findOne({
				where: {
					name: capitalizedSeason,
				},
				attributes: ["id", "name"],
			});
			const seasonEvents = await Calendar.findAll({
				where: {
					seasonId: findSeason.id,
				},
			});
			return seasonEvents;
		} else if (!season && date) {
			const dates = await Calendar.findAll({
				where: {
					date: date,
				},
			});
			return dates;
		} else {
			throw new Error("Invalid query: Both season and date are missing");
		}
	} catch (error) {
		console.error("Error fetching calendar data:", error);
		throw new Error("Internal Server Error");
	}
};
// might just combine this one with villager
const searchSchedule = async (query) => {
	return "schedule search function";
};

// returns gifts that can be found in a season
const searchSeason = async (query) => {
	let seasonName = query.charAt(0).toUpperCase() + query.slice(1).toLowerCase();
	// find season id
	const season = await Season.findAll({
		where: {
			name: seasonName,
		},
		attributes: ["id", "name"],
		include: [
			{
				model: Gift,
				through: Gift_Season,
			},
		],
	});
	return season;
};
module.exports = { search };
