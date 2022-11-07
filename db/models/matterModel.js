const { Model, DataTypes, Sequelize } = require('sequelize');

const MATTER_TABLE = 'materias';

const MatterSchema = {
  id_materia : {
    type: DataTypes.NUMBER,
    primaryKey:true
  },
  codigo_materia : {
    type: DataTypes.STRING
  },
  nombre_materia :{
    type: DataTypes.STRING
  },
  creditos_materia :{
    type: DataTypes.NUMBER
  },
  cupos: {
    type: DataTypes.NUMBER
  },
  estado_activo :{
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
}

class Matter extends Model {
  static associate() {
    // asociaciones
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: MATTER_TABLE,
      modelName: 'Matter',
      timestamps: false
    }
  }
}

module.exports = {MATTER_TABLE, MatterSchema, Matter}
