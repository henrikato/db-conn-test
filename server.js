import express from 'express';
import router from './app/Router';

const app = express()

app.use(express.urlencoded({ extended: true })).use(express.json())

const port = process.env.port || 3000;

app.use('/api', router);

app.listen(port, () => console.log(`Aplicação online na porta ${port}`));