const { Student, StudentSchema  } = require('./studentModel');
const {  Matter, MatterSchema  } = require('./matterModel');
const {  Inscription, InscriptionSchema } = require('./inscriptionsModel');


function setupModels(sequelize) {
  Student.init(StudentSchema, Student.config(sequelize));
  Matter.init(MatterSchema, Matter.config(sequelize));
  Inscription.init(InscriptionSchema, Inscription.config(sequelize));
}

module.exports = setupModels;
