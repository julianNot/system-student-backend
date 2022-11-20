const { models } = require('./../libs/sequelize');
const boom = require('@hapi/boom');
const bcrypt = require('bcrypt');


class StudentsService {

  async create(data) {
    let hash = null
    if(data.password) {
      hash = await bcrypt.hash(data.password, 10);
    }
    const newStudent = await models.Student.create({
      ...data,
      password: hash
    });
    return newStudent;
  }

  async find(query) {
    const options = {
      offset: 0,
      limit: 10,
      where: {}
    }
    const {offset, limit} = query
    if(offset && limit) {
      options.offset = offset;
      options.limit = limit;
    }
    const {estado} = query
    if(estado) {
      options.where.estado = estado
    }
    const response = await models.Student.findAll(options);
    return response;
  }

  async findByCodeStudent(codigo_estudiante) {

    const response = await models.Student.findOne({
      where: {codigo_estudiante: codigo_estudiante}
    });
    return response;
  }

  async findOne(id) {
    const student = await models.Student.findByPk(id);
    if (!student) {
      throw boom.notFound('product not found');
    }
    return student;
  }

  async update(id, changes) {
    const student = await models.Student.findByPk(id);
    const response =  await student.update(changes);
    return response;
  }

  async delete(id) {
    const student = await models.Student.findByPk(id);
    await student.destroy();
    return { id };
  }
}

module.exports = StudentsService;
