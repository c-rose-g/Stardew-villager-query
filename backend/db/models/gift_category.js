"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Gift_Category extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	Gift_Category.init(
		{
			giftId: {
				type: DataTypes.INTEGER,
				references: { model: "Gifts", key: "id" },
				allowNull: false,
			},
			categoryId: {
				type: DataTypes.INTEGER,
				allowNull: false,
				references: { model: "Categories", key: "id" },
			},
		},
		{
			sequelize,
			modelName: "Gift_Category",
			timestamps: false,
			primaryKey: ["giftId", "categoryId"],
		}
	);
	return Gift_Category;
};
