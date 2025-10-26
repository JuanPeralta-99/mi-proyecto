import { createTask, getAllTasks } from '../../src/services/tasksService.js';

describe('tasks service', () => {
  it('crea y recupera tareas', () => {
    createTask({ title: 'tarea prueba' });
    const tasks = getAllTasks();
    expect(tasks.length).toBeGreaterThan(0);
    expect(tasks.some(t => t.title === 'tarea prueba')).toBeTruthy();
  });
});
