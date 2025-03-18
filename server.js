const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Define a route for the home page
app.get('/', (req, res) => {
    const filePath = path.join(__dirname, 'public', 'index.html'); // Construct the path
    console.log(filePath); // Log the path to the console
    res.sendFile(filePath); // Send the file
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`); // Correctly formatted
});