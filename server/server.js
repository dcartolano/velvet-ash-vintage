import express from 'express';
import path from 'node:path'
import routes from './routes/index.js'

const __dirname = import.meta.dirname;

const app = express();
const PORT = process.env.PORT || 3001;

app.get('/api', (req, res) => {
  res.send('Hello from the Node.js backend api!');
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes);

// if we're in production, serve client/build as static assets
// if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/dist')));
// }

  app.use(routes);

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist/index.html'));
  });


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});