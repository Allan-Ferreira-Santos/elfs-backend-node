import express from 'express';
import db from '../backend-node/src/database/db.js';
import userRoute from './src/routes.js';
import dotenv from "dotenv";

dotenv.config();

const port = 3000;
const app = express();

db();

app.use(express.json());
app.use(userRoute);

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});