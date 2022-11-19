const { Strategy } = require('passport-local');
const boom = require('@hapi/boom');
const bcrypt = require('bcrypt');

const StudentsService = require('./../../../services/studentsService');
const service = new StudentsService();

const LocalStrategy = new Strategy( async (codeStudent, password, done) => {
  try {
    const student = await service.findByCodeStudent(codeStudent);
    if(!student){
      done(boom.unauthorized(), false);
    }
    const isMatch = await bcrypt.compare(password, student.password);
    if(!isMatch) {
      done(boom.unauthorized(), false);
    }
    done(null, student);
  } catch (error) {
    done(error, false);
  }
});

module.exports = LocalStrategy;
