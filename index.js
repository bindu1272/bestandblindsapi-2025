const express = require('express');
const app = express();
const cors = require('cors');
const port = 4000;

// Middleware to parse JSON
app.use(express.json());
app.use(cors()); // Allows requests from any origin

// Basic API route
app.get('/names', (req, res) => {
    res.send(["John", "Jane", "Doe"]);
});

// Example POST route
app.post('/api/data', (req, res) => {
    const data = req.body;
    res.json({ message: 'Data received', data });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
