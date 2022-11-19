const { models } = require('./../libs/sequelize');

class InscriptionsService {

  async create(data) {
    const newInscription = await models.Inscription.create(data);
    return newInscription;
  }

  async find(query) {
    const options = {
      include: ['student', 'matter'],
      offset: 0,
      limit: 10
    }
    const {offset, limit} = query
    if(offset && limit) {
      options.offset = offset;
      options.limit = limit;
    }
    const response = await models.Inscription.findAll(options);
    return response;
  }

  async findOne(id) {
    const inscription = await models.Inscription.findByPk(id, {
      include: ['student', 'matter'],
    });
    return inscription;
  }

  async update(id, changes) {
    const inscription = await models.Inscription.findByPk(id);
    const response =  await inscription.update(changes);
    return response;
  }

  async delete(id) {
    const inscription = await models.Inscription.findByPk(id);
    await inscription.destroy();
    return { id };
  }
}

module.exports = InscriptionsService;
