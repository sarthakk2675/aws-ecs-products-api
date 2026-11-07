const express = require('express');
const app = express();

app.get('/health', (req, res) => res.status(200).send('OK'));

app.get('/api/products', (req, res) => 
  res.json([{ id: 1, name: 'Laptop' }, { id: 2, name: 'Phone' }])
);
app.get('/', (req, res) => {
  res.status(200).send('Welcome to the Products API! Use /api/products to view items.');
});
app.listen(3000, () => console.log('Running on port 3000'));