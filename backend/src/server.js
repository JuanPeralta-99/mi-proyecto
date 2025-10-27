import app from './app.js';
import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT || 4000;

// Escucha en 0.0.0.0 para GitHub Actions
app.listen(PORT, '0.0.0.0', (err) => {
  if (err) {
    console.error('Error starting server:', err);
    process.exit(1);
  }
  console.log(`Server listening on http://0.0.0.0:${PORT}`);
});
