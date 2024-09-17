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
} = require("../db/models");

const { Op } = require("sequelize");
// Search bar controller logic

const search = async (req, res) => {
	const { query, type } = req.query;

	try {
		let result;

		switch (type) {
			case "gift":
				result = await searchGift(query);
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

// lazy loading information on location, building, season
// eager loading information on gift and villager-gift
// *REVIEW - do I want to use eager loading or lazy loading?
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
				},
				{
					model: Villager_Gift.scope("withPreferenceName"),
					as: "villagerGifts",
					attributes: { exclude: ["PreferenceId"] }, // Exclude preferenceId
				},

			],

		});

		if(!gifts.length){
			return "Gift cannot be found, please try again :)"
		}
		return gifts;
	} catch (err) {
		console.log(err);
		throw new Error("There was an error searching for gifts");
	}
};

// this has to include Villager_Gift
const searchVillager = async (query) => {
	console.log("villager search function");
};

const searchLocation = async (query) => {
	console.log("location search function");
};

const searchBuilding = async (query) => {
	console.log("building search function");
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
