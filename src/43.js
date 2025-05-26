const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(`
    <h1>Welcome to My School Project</h1>
    <p>This is a simple school project using Node.js and Express.</p>
  `);
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
