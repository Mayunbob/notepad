'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Services', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      appId: {
        type: Sequelize.INTEGER
      },
      code: {
        type: Sequelize.STRING
      },
      stype: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      logoImage: {
        type: Sequelize.TEXT
      },
      iconImage: {
        type: Sequelize.TEXT
      },
      tags: {
        type: Sequelize.STRING
      },
      intro: {
        type: Sequelize.TEXT
      },
      info: {
        type: Sequelize.TEXT
      },
      content: {
        type: Sequelize.TEXT
      },
      weigh: {
        type: Sequelize.INTEGER
      },
      useSwitch: {
        type: Sequelize.INTEGER
      },
      adminId: {
        type: Sequelize.INTEGER
      },
      stypeText: {
        type: Sequelize.TEXT
      },
      logoImageUrl: {
        type: Sequelize.TEXT
      },
      iconImageUrl: {
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
    await queryInterface.dropTable('Services');
  }
};