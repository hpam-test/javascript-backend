'use strict';

const fs = require('fs');
const path = require('path');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    const sqlFile = fs.readFileSync(path.resolve(__dirname, '../database/t_category.sql'), 'utf8');

    // Execute the SQL queries
    return queryInterface.sequelize.query(sqlFile);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('t_categories');
  }
};
