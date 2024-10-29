const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // Default to 3000 if no port is specified

app.get('/', (req, res) => {
    res.send('Nabil wanted it to be simple!!!');
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

