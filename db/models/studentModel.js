const { Model, DataTypes, Sequelize } = require('sequelize');

const STUDENT_TABLE = 'estudiantes';

const StudentSchema = {
  id_estudiante : {
    autoIncrement:true,
    primaryKey:true,
    type: DataTypes.INTEGER
  },
  codigo_estudiante : {
    type: DataTypes.INTEGER
  },
  tipo_documento :{
    type: DataTypes.STRING
  },
  numero_documento :{
    type: DataTypes.STRING
  },
  nombres : {
    type: DataTypes.STRING
  },
  apellidos :{
    type: DataTypes.STRING
  },
  estado :{
    type: DataTypes.STRING
  },
  image :{
    type: DataTypes.STRING
  },
  password :{
    type: DataTypes.STRING
  }
}

class Student extends Model {
  static associate(models) {
    // asociaciones
    this.hasMany(models.Inscription, {
      as: 'inscriptions',
      foreignKey: 'id_estudiante'
    })
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: STUDENT_TABLE,
      modelName: 'Student',
      timestamps: false
    }
  }
}

module.exports = {STUDENT_TABLE, StudentSchema, Student}
