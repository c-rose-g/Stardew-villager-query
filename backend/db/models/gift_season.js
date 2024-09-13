'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class gift_season extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  gift_season.init({
    giftId: DataTypes.INTEGER,
    seasonId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'gift_season',
  });
  return gift_season;
};