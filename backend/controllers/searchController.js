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
	const { query, type, page, size } = req.query;

	try {
		let result;
		parsedPage =
			page === undefined ? 1 : page < 0 ? 1 : page > 5 ? 5 : parseInt(page);
		parsedSize =
			size === undefined ? 10 : size < 0 ? 1 : size > 10 ? 10 : parseInt(size);

		switch (type) {
			case "gift":
				result = await searchGift(query, parsedPage, parsedSize);
				break;
			case "villager":
				result = await searchVillager(query);
				break;
			case "location":
				result = await searchLocation(query);
				break;
			case "building":
				result = await searchBuilding(query);
				break;
			default:
				return res.status(400).json({ message: "Invalid search type" });
		}
		return res.json(result);
	} catch (err) {
		return res
			.status(500)
			.json({ message: "Error processing the search", err });
	}
};

const searchGift = async (query, page, size) => {
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
			limit: size,
			offset: size * (page - 1),
		});

		if (!gifts.length) {
			return "Gift cannot be found, please try again :)";
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
const searchVillager = async (query) => {
	try {
		const villager = await Villager.findOne({
			where: {
				name: {
					[Op.like]: `%${query}%`,
				},
			},
			include: [
				{
					model: Gift,
					through: ["villagerId", "giftId"],
				},
			],
			// limit: size,
			// offset: size * (page - 1),
		});
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
		return villager;
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
	// look for building's id

	// look for building
	const building = await Building.findAll({
		where: {
			name:{
				[Op.like] : `%${query}%`
			}
		},
		include: [
			// {
				// model: Building,
				// include: [
					{
						model: Gift,
						through: {
							model: Gift_Building,
							attributes: [],
						},
					},
				// ],
			// },
		],
	});
	return building;
};

const searchCalendar = async (query) => {
	console.log("calendar search function");
};

const searchSchedule = async (query) => {
	console.log("schedule search function");
};

const searchSeason = async (query) => {
	console.log("season search function");
};
module.exports = { search };
