import Database from 'better-sqlite3';

// Si estás ejecutando pruebas (NODE_ENV=test), usa una DB en memoria
const DB_PATH = process.env.NODE_ENV === 'test' ? ':memory:' : './db.sqlite';

// Crear conexión con la base de datos
const db = new Database(DB_PATH);

// Crear tabla si no existe
db.exec(`
  CREATE TABLE IF NOT EXISTS tasks (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    completed INTEGER DEFAULT 0
  )
`);

// Función para obtener todas las tareas
export function getAllTasks() {
  const stmt = db.prepare('SELECT * FROM tasks');
  return stmt.all();
}

// Función para crear una nueva tarea
export function createTask(title) {
  const stmt = db.prepare('INSERT INTO tasks (title) VALUES (?)');
  const info = stmt.run(title);
  return { id: info.lastInsertRowid, title, completed: 0 };
}

// Función para marcar una tarea como completada
export function completeTask(id) {
  const stmt = db.prepare('UPDATE tasks SET completed = 1 WHERE id = ?');
  stmt.run(id);
  const updated = db.prepare('SELECT * FROM tasks WHERE id = ?').get(id);
  return updated;
}

// Función para eliminar una tarea
export function deleteTask(id) {
  const stmt = db.prepare('DELETE FROM tasks WHERE id = ?');
  stmt.run(id);
  return { message: `Tarea ${id} eliminada correctamente.` };
}

export default db;
