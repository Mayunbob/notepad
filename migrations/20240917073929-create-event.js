'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Events', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      datetime: {
        type: Sequelize.STRING
      },
      nowLocation: {
        type: Sequelize.STRING
      },
      explain: {
        type: Sequelize.TEXT
      },
      emotionName: {
        type: Sequelize.STRING
      },
      event: {
        type: Sequelize.TEXT
      },
      influence: {
        type: Sequelize.TEXT
      },
      improvement: {
        type: Sequelize.TEXT
      },
      tag: {
        type: Sequelize.TEXT
      },
      reason: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Events');
  }
};