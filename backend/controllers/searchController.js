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
} = require("../db/models");

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

const searchGift = async (query) => {
	console.log("gift search function");
	// look through the Gift table, and return information on the gift, who loves/likes/etc this gift, and where to find it
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
