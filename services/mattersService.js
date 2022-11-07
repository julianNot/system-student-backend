const { models } = require('./../libs/sequelize');

class MattersService {

  async create(data) {
    const newSMatter = await models.Matter.create(data);
    return newSMatter;
  }

  async find() {
    const response = await models.Matter.findAll();
    return response;
  }

  async findOne(id) {
    const student = await models.Matter.findByPk(id);
    return student;
  }

  async update(id, changes) {
    const matter = await models.Matter.findByPk(id);
    const response =  await matter.update(changes);
    return response;
  }

  async delete(id) {
    const matter = await models.Matter.findByPk(id);
    await matter.destroy();
    return { id };
  }
}

module.exports = MattersService;
