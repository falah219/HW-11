'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const addTodos = [
      {
        title: "Makan",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Mandi",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Tidur",
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]

    return queryInterface.bulkInsert('Todos', addTodos, {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Todos', null, {});
  }
};
