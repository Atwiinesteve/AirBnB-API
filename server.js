// importing modules.
const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');

// application configs
const app = express();
const PORT = process.env.PORT||3000;

// article array.
let articles = [];

// GET routes.
app.get("/holiday-and-vacations-with-packages", (req, res) => {
    axios.get("https://www.expedia.com/")
        .then((response) => {
            const html = response.data;
            const $ = cheerio.load(html);
            $('a', html).each(function() {
                const text = $(this).text();
                const link = $(this).attr("href");
                if(!link.includes("https://www.expedia.com/")) { // If website does not include "https://www.expedia.com"
                    articles.push() // Do not add to articles array
                } else { // Else add to articles array
                    articles.push({
                        text,
                        link
                    })
                }
                
            });
            res.json(articles);
        })
        .catch((error) => { console.log(error) });
})

// initialize server.
app.listen(PORT, () => {
    console.log(`Server Application Running on http://localhost:${PORT}`);
})