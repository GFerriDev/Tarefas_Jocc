'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.createTable('tarefas', {
      id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      tarefa:{
        type: Sequelize.STRING,
        allowNull: false

      },

      description:{
        type: Sequelize.STRING,
        allowNull: false

      },

      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },

      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }

    })
  },

  async down (queryInterface, Sequelize) {

     await queryInterface.dropTable('tarefas')

  }

  
};
