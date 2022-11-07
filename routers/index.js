const express = require('express');
const studentsRouter = require('./studentsRouter');
const matterRouter = require('./matterRouter');
const inscriptionsRouter = require('./inscriptionsRouter');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1/', router)
  router.use('/students', studentsRouter)
  router.use('/matters', matterRouter)
  router.use('/inscriptions', inscriptionsRouter)
}

module.exports = routerApi;
