import express, { Express } from 'express';
import cors from 'cors';
import usuariosRouter from './routes/usuario';

const app: Express = express();

app.use(express.json());
app.use(cors());

app.use(usuariosRouter);

app.listen(3000, () => {
    console.log("Servidor foi iniciado na porta 3000");
});