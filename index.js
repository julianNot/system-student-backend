const express = require('express');
const cors = require('cors');
const routerApi = require('./routers');
const { checkApiKey } = require('./middlewares/auth');

const { logErrors, errorHandler } = require('./middlewares/errorHandler');

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());
require('./utils/auth')

app.get('/', checkApiKey, (req, res) => {
  res.send('sira-students');
});

routerApi(app);

app.use(logErrors);
app.use(errorHandler);

app.listen(port, () => {
  console.log('Ejecutando : ' + port);
});
