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
    villagerId: {
      type:DataTypes.INTEGER,
      references:{
        key:'id',
        model:'Villagers'
      },
      allowNull:false,
    },
    giftId: {
      type:DataTypes.INTEGER,
      references:{
        key:'id',
        model:'Gifts'
      },
      allowNull:false,
    },
    preferenceLevel: {
      type:DataTypes.STRING,
      validate:{
        isIn:[['loves', 'likes', 'neutrals', 'dislikes', 'hates']]
      },
      allowNull:false,
    }
  }, {
    sequelize,
    modelName: 'Villager_Gift',
    timestamps: false, // if you don't want createdAt/updatedAt columns
    primaryKey: ['villager_id', 'gift_id'], // Composite primary key


  });
  return Villager_Gift;
};
