const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

// Jenkins / PM2 dynamic port
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send(`
        <html>
            <head>
                <title>Jenkins Node App</title>
            </head>
            <body>
                <h1>Hello Aditya...</h1>
            </body>
        </html>
    `);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
