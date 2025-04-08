const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing fields' });
  }
  console.log('Received contact form submission:', req.body);
  res.status(200).json({ success: true });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});