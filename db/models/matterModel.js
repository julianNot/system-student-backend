const { Model, DataTypes, Sequelize } = require('sequelize');

const MATTER_TABLE = 'materias';

const MatterSchema = {
  id_materia : {
    type: DataTypes.INTEGER,
    primaryKey:true
  },
  codigo_materia : {
    type: DataTypes.STRING
  },
  nombre_materia :{
    type: DataTypes.STRING
  },
  creditos_materia :{
    type: DataTypes.INTEGER
  },
  cupos: {
    type: DataTypes.INTEGER
  },
  estado_activo :{
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
}

class Matter extends Model {
  static associate(models) {
    // asociaciones
    this.hasMany(models.Inscription, {
      as: 'inscriptions',
      foreignKey: 'id_materia'
    })
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
