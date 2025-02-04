'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class dealershipsToCars extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  dealershipsToCars.init(
    {
      carId: {
        type: DataTypes.INTEGER,
        field: 'car_id',
        allowNull: false,
        references: {
          model: 'Cars',
          key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      dealershipId: {
        type: DataTypes.INTEGER,
        field: 'dealership_id',
        allowNull: false,
        references: {
          model: 'Dealerships',
          key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
    },
    {
      sequelize,
      modelName: 'dealershipsToCars',
      tableName: 'dealerships_to_cars',
      underscored: true,
    }
  );
  return dealershipsToCars;
};
