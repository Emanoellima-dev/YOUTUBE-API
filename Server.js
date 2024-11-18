import express from 'express';
import axios from 'axios';
import routes from './routes/routes.js';

const app = express();
const PORT = process.env.PORT;

app.use('/', routes);

app.listen(PORT, () => {
  console.log("O Servidor Esta Ativo");
});

