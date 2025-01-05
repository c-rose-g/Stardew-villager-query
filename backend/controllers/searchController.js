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

const { Op } = require("sequelize");
// Search bar controller logic

const search = async (req, res) => {
	const { query } = req.query;

	try {
		let result,
			gifts,
			villagers,
			location,
			building,
			calendar,
			schedule,
			season;

		gifts = await searchGift(query);

		villagers = await searchVillager(query);

		if (gifts && gifts.length > 0) {
			result = { results: gifts, model: "gifts" };
		} else if (villagers && villagers.length > 0) {
			result = { results: villagers, model: "villagers" };
		} else {
			// return res.status(404).json({ message: "No results found." });
			result = { results: [], model: null }; // Return an empty array when no results are found

		}

		return res.json(result);
	} catch (err) {
		return res
			.status(500)
			.json({ message: "Error processing the search", err });
	}
};

const searchGift = async (query) => {
	if (!query) return []; // Return an empty array if the query is empty

	try {
		const gifts = await Gift.findAll({
			where: {
				name: {
					[Op.like]: `%${query}%`,
				},
			},
			include: [
				{
					model: Villager_Gift,
					as: "VillagerGifts",
					include: [
						{ model: Villager, attributes: ["name"] },
						{ model: Preference, attributes: ["name"] },
					],
					attributes: ["villagerId", "preferenceId"],
				},
				{
					model: Gift_Season,
					as: "GiftSeasons",
					include: [{ model: Season, attributes: ["name"] }],
					attributes: ["giftId", "seasonId"],
				},
			],
		});

		if (!gifts.length) return [];

		return gifts.map((gift) => {
			// jsonify the data
			const giftData = gift.toJSON();

			// reduce VillagerGifts and create arrays of villager names
			const groupedPreferences = giftData.VillagerGifts.reduce(
				(acc, villagerGift) => {
					const preference = villagerGift.Preference?.name;
					const villager = villagerGift.Villager?.name;

					// if preference key doesn't exist in acc obj, create a new array value for said preference key
					if (!acc[preference]) acc[preference] = [];

					// push villagerName into preference key
					acc[preference].push(villager);

					return acc;
				},
				{}
			);

			return {
				...giftData,
				groupedPreferences,
			};
		});
	} catch (err) {
		console.log(err);
		throw new Error("There was an error searching for gifts");
	}
};

const searchVillager = async (query) => {
	try {
		const villager = await Villager.findAll({
			where: { name: query },
			include: [
				{
					model: Villager_Gift,
					as: "VillagerGifts",
					include: [
						{ model: Preference, attributes: ["name"] },
						{ model: Gift, attributes: ["name"] },
					],
					attributes: ["giftId", "preferenceId"],
				},
				{ model: Building },
				{ model: House },
			],
		});

		if (!villager.length) return [];

		return villager;
	} catch (err) {
		console.log(err);
		throw new Error("There was an error searching for villagers");
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
module.exports = { search, searchGift, searchVillager };
