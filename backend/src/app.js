import express from 'express';
import cors from 'cors';
import tasksRouter from './routes/tasks.js';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/tasks', tasksRouter);

// Ruta de prueba para wait-on
app.get('/', (req, res) => res.send('Backend is running!'));

export default app;
