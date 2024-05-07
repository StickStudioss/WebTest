const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static('public')); // Serve static files from 'public' directory

// Receive POST request
app.post('/api/send', (req, res) => {
    console.log("Data received: ", req.body);
    // Respond back to Roblox
    res.status(200).send("Data received successfully!");
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
