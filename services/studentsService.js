const { models } = require('./../libs/sequelize');
const boom = require('@hapi/boom');

class StudentsService {

  async create(data) {
    const newStudent = await models.Student.create(data);
    return newStudent;
  }

  async find() {
    const response = await models.Student.findAll();
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
