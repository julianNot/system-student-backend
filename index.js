const express = require('express');
const cors = require('cors');
const routerApi = require('./routers')

const { logErrors, errorHandler } = require('./middlewares/errorHandler');

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('sira-students');
});

routerApi(app);

app.use(logErrors);
app.use(errorHandler);

app.listen(port, () => {
  console.log('Ejecutando : ' + port);
});
