import Database from 'better-sqlite3';
const DB_PATH = process.env.NODE_ENV === 'test' ? ':memory:' : './db.sqlite';
const db = new Database(DB_PATH);

db.exec(`CREATE TABLE IF NOT EXISTS tasks (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT)`);

export const getAllTasks = () => {
  const rows = db.prepare('SELECT * FROM tasks').all();
  return rows;
};

export const createTask = ({ title }) => {
  const info = db.prepare('INSERT INTO tasks (title) VALUES (?)').run(title);
  return { id: info.lastInsertRowid, title };
};
