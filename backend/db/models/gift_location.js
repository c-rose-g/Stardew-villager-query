"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Gift_Location extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	Gift_Location.init(
		{
			giftId: {
				type: DataTypes.INTEGER,
				allowNull: false,
				references: {
					model: "Gifts",
					key: "id",
				},
			},
			locationId: {
				type: DataTypes.INTEGER,
				allowNull: true,
				references: {
					model: "Locations",
					key: "id",
				},
			},
		},
		{
			sequelize,
			modelName: "Gift_Location",
			timestamps: false,
			primaryKey: ["giftId", "locationId"],
		}
	);
	return Gift_Location;
};
