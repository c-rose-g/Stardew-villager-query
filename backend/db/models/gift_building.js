"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Gift_Building extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	Gift_Building.init(
		{
			giftId: {
				type: DataTypes.INTEGER,
				allowNull: false,
				references: { model: "Gifts", key: "id" },
			},
			buildingId: {
				type: DataTypes.INTEGER,
				allowNull: true,
				references: { model: "Buildings", key: "id" },
			},
		},
		{
			sequelize,
			modelName: "Gift_Building",
			timestamps: false,
			primaryKey: ["giftId", "buildingId"],
		}
	);
	return Gift_Building;
};
