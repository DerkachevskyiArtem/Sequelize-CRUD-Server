'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('cars', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      modelName: {
        type: Sequelize.STRING(128),
        allowNull: false,
        field: 'model_name',
      },
      manufacturer: {
        type: Sequelize.STRING(128),
        allowNull: false,
      },
      modelYear: {
        type: Sequelize.DATEONLY,
        allowNull: false,
        field: 'model_year',
      },
      isNew: {
        type: Sequelize.BOOLEAN,
        field: 'is_new',
        defaultValue: false,
      },
      price: {
        type: Sequelize.DECIMAL(14,2),
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'created_at'
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
         field: 'updated_at'
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('cars');
  },
};
