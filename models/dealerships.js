'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Dealerships extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({}) {
      // define association here
    }
  }
  Dealerships.init(
    {
      name: {
        type: DataTypes.STRING(128),
        allowNull: false,
        validate: {
          notEmpty: true,
          notNull: true,
        },
      },
      address: {
        type: {
          type: DataTypes.STRING(512),
          allowNull: false,
          validate: {
            notEmpty: true,
            notNull: true,
          },
        },
      },
      phoneNumber: {
        type: DataTypes.STRING(13),
        field: 'phone_number',
        allowNull: false,
        validate: {
          notEmpty: true,
          notNull: true,
          phoneNumber(phoneNumber) {
            if (!/^\+?\d{10,13}$/.test(phoneNumber)) {
              throw new Error(
                'Phone number must be a valid number with 10 to 13 digits, optionally starting with "+"'
              );
            }
          },
        },
      },
    },
    {
      sequelize,
      modelName: 'Dealerships',
      tableName: 'dealerships',
      underscored: true,
    }
  );
  return Dealerships;
};
