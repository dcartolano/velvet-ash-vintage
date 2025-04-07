import express from 'express';
// import db from './config/connection.js';
// import path from 'node:path'
import dotenv from 'dotenv';
import path from 'path';
import routes from './routes/index.js'
// import cors from 'cors';

const __dirname = import.meta.dirname;

// await db();

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;


// app.use(cors());

// var corsOptions = {
//   origin: 'http://example.com',
//   optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
// }

// app.options('*', cors())


// app.get('/api', (req, res) => {
//   res.send('Hello from the Node.js backend api!');
// });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/dist')));
} else {
  app.use(express.static('../client/dist'));
}

app.use(routes);

// Catch-all route to serve the React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});