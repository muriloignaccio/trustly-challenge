import express from 'express'
import cors from 'cors'

import { router } from './routes'
import { routeNotFound } from './middlewares/routeNotFound';

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);
app.use(routeNotFound);

app.listen(3333);