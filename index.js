const express = require('express');
const app = express();
const port = 3000;

// Define a simple route
app.get('/', (req, res) => {
  res.send('Hello, Mother I miss you!!!1234!');
});

// Start the server
app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`);
});
