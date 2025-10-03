// server.js

import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';

const app = express();
const PORT = 3001; // Or any other port that is not in use

// Use CORS middleware to allow requests from your React app
app.use(cors());

app.get('/api/suggestions', async (req, res) => {
  const { q } = req.query; // Get the search query from the request

  if (!q) {
    return res.status(400).json({ error: 'Query parameter "q" is required' });
  }

  try {
    const apiUrl = `http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=${q}`;
    const response = await fetch(apiUrl);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch suggestions' });
  }
});

app.listen(PORT, () => {
  console.log(`Proxy server listening on port ${PORT}`);
});