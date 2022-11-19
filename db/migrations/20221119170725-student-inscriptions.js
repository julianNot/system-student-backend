'use strict';

const { StudentSchema, STUDENT_TABLE } = require('./../models/studentModel');
const {  MatterSchema, MATTER_TABLE } = require('./../models/matterModel');
const { InscriptionSchema, INSCRIPTION_TABLE } = require('./../models/inscriptionsModel');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable(STUDENT_TABLE, StudentSchema);
    await queryInterface.createTable(MATTER_TABLE, MatterSchema);
    await queryInterface.createTable(INSCRIPTION_TABLE, InscriptionSchema);
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable(STUDENT_TABLE);
    await queryInterface.dropTable(MATTER_TABLE);
    await queryInterface.dropTable(INSCRIPTION_TABLE);
  }
};
