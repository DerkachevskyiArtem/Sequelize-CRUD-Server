'use strict';
const { Model } = require('sequelize');
const { isAfter } = require('date-fns');
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
        validate: {
          notEmpty: true,
          notNull: true,
        },
      },
      manufacturer: {
        type: DataTypes.STRING(128),
        allowNull: false,
        validate: {
          notEmpty: true,
          notNull: true,
        },
      },
      modelYear: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        field: 'model_year',
        validate: {
          notEmpty: true,
          notNull: true,
          isDate: true,
          isValidModelDate(modelYear) {
            if (isAfter(modelYear, new Date())) {
              throw new Error('Model year cannot be in the future');
            }
          },
        },
      },
      isNew: { type: DataTypes.BOOLEAN, field: 'is_new', defaultValue: false },
      price: {
        type: DataTypes.DECIMAL(14, 2),
        allowNull: false,
        validate: {
          notEmpty: true,
          notNull: true,
          isNumeric: true,
          positivePrice(price) {
            if (price < 0) {
              throw new Error('Price must be a positive number');
            }
          },
        },
      },
    },
    {
      sequelize,
      modelName: 'Car',
      tableName: 'cars',
      underscored: true
    }
  );
  return Car;
};
