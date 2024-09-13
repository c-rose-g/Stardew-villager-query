"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Gift_Season extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	Gift_Season.init(
		{
			giftId: {
				type: DataTypes.INTEGER,
				references: { key: "id", model: "Gifts" },
				allowNull: false,
			},
			seasonId: {
				type: DataTypes.INTEGER,
				references: { key: "id", model: "Seasons" },
				allowNull: true,
			},
		},
		{
			sequelize,
			modelName: "Gift_Season",
			timestamps: false,
			primaryKey: ["giftId", "seasonId"],
		}
	);
	return Gift_Season;
};
