'use strict';

const { StudentSchema, STUDENT_TABLE } = require('./../models/studentModel');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.addColumn(STUDENT_TABLE, 'imagen', StudentSchema.image);
  },

  down: async (queryInterface) => {
    await queryInterface.removeColumn(STUDENT_TABLE, 'imagen');
  }
};
