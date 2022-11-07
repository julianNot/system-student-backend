const { Model, DataTypes, Sequelize } = require('sequelize');

const INSCRIPTION_TABLE = 'inscripciones';

const InscriptionSchema = {
  id_estudiante : {
    type: DataTypes.NUMBER,
    primaryKey:true,
  },
  id_materia : {
      type: DataTypes.NUMBER,
      primaryKey:true},
  fecha_inscripcion : {
      type: DataTypes.DATE,
  },
}

class Inscription extends Model {
  static associate() {
    // asociaciones
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
