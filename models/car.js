'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Car extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Car.init(
    {
      modelName: {
        type: DataTypes.STRING(128),
        allowNull: false,
        field: 'model_name',
      },
      manufacturer: { type: DataTypes.STRING(128), allowNull: false },
      modelYear: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        field: 'model_year',
      },
      isNew: { type: DataTypes.BOOLEAN, field: 'is_new', defaultValue: false },
      price: { type: DataTypes.DECIMAL(14, 2), allowNull: false },
    },
    {
      sequelize,
      modelName: 'Car',
      tableName: 'cars',
      underscored: true,
    }
  );
  return Car;
};
