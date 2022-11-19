const { Model, DataTypes, Sequelize } = require('sequelize');
const { v4: uuidv4 } = require('uuid');
const { STUDENT_TABLE } = require('./studentModel');
const { MATTER_TABLE } = require('./matterModel');

const INSCRIPTION_TABLE = 'inscripciones';

const InscriptionSchema = {
  id_inscription :{
    primaryKey: true,
    type: DataTypes.STRING,
    defaultValue: uuidv4
  },
  id_estudiante : {
    field: 'id_studiante',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: STUDENT_TABLE,
      key: 'id_estudiante'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  id_materia : {
    field: 'id_materia',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: MATTER_TABLE,
      key: 'id_materia'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  fecha_inscripcion : {
    type: DataTypes.DATE,
  },
}

class Inscription extends Model {
  static associate(models) {
    // asociaciones
    this.belongsTo(models.Student, {
      as : 'student'
    })
    this.belongsTo(models.Matter, {
      as : 'matter'
    })
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: INSCRIPTION_TABLE,
      modelName: 'Inscription',
      timestamps: false
    }
  }
}

module.exports = {INSCRIPTION_TABLE, InscriptionSchema, Inscription}
