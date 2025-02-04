'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class CarPictures extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Car }) {
      // Визначення асоціації з моделлю Car
      CarPictures.belongsTo(Car, {
        foreignKey: 'carId',
        as: 'car',
      });
    }
  }

  CarPictures.init(
    {
      title: {
        type: DataTypes.STRING(128),
        allowNull: false,
        validate: {
          notEmpty: true,
          notNull: true,
        },
      },
      imageName: {
        type: DataTypes.STRING(255),
        allowNull: false,
        validate: {
          notEmpty: true,
          notNull: true,
        },
        field: 'image_name',
      },
      carId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'cars',
          key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
    },
    {
      sequelize,
      modelName: 'CarPictures',
      tableName: 'car_pictures',
      underscored: true,
    }
  );

  return CarPictures;
};
