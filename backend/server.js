import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5000; // Set port for the server

app.use(cors()); // Enable CORS for all routes

app.get('/api/greet', (req, res) => {
  // API endpoint to greet the user

  const name = req.query.name;
  if (!name) {
    return res.status(400).json({ error: 'Name is required.' }); // Return error if name is not provided
  }
  res.json({ message: `Hello, ${name}! Welcome to Younglabs.` }); // Return greeting message
});

app.listen(PORT, () => {
  // Start the server and listen on the specified port

  console.log(`Server running on port ${PORT}`); // Log server status
});
