import { Router } from 'express';
import { getAllTasks, createTask } from '../services/tasksService.js';

const router = Router();

router.get('/', async (req, res) => {
  const tasks = await getAllTasks();
  res.json(tasks);
});

router.post('/', async (req, res) => {
  const { title } = req.body;
  if (!title) return res.status(400).json({ error: 'title required' });
  const task = await createTask({ title });
  res.status(201).json(task);
});

export default router;
