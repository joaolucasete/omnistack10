import express from 'express';
import mongoose from 'mongoose';

import routes from './routes.js';

const app = express();

mongoose.connect('mongodb+srv://<user>:<password>@cluster0-4evhg.mongodb.net/week10?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});


app.use(express.json());
app.use(routes);

app.listen(3333, () => console.log("App aberto na porta 3333"));