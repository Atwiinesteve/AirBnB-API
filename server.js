// importing modules.
const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');

// application configs
const app = express();
const PORT = process.env.PORT||3000;

// initialize server.
app.listen(PORT, () => {
    console.log(`Server Application Running on http://localhost:${PORT}`);
})