'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Villager_Gift extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Villager_Gift.init({
    villagerId: DataTypes.INTEGER,
    giftId: DataTypes.INTEGER,
    preferenceLevel: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Villager_Gift',
  });
  return Villager_Gift;
};