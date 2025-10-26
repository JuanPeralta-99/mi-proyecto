import request from 'supertest';
import app from '../../src/app.js';

describe('API tasks', () => {
  it('POST /api/tasks crea tarea y GET /api/tasks la devuelve', async () => {
    const post = await request(app).post('/api/tasks').send({ title: 'integracion' });
    expect(post.status).toBe(201);
    const get = await request(app).get('/api/tasks');
    expect(get.status).toBe(200);
    expect(get.body.some(t => t.title === 'integracion')).toBe(true);
  });
});
