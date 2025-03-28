import express from 'express';
import cors from 'cors';

import config from './config/config.js';
import userRoutes from './core/users/userRoutes.js';

const app = express();

app.use(cors());
app.use(express.json());


app.listen(config.port, () =>
  console.log(`Server is live @ ${config.hostUrl}`),
);

app.use('/api', userRoutes);