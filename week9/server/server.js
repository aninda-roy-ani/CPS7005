// server/server.js
const express = require('express');
const bodyParser = require('body-parser');
const dictionary = require('./dictionary');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());


// End-points
app.get('/', (req, res) => {
    res.send('Language Translator');
});

app.post('/api/translate', (req, res) => {
    try {
        const { text } = req.body;
        const words = text.toLowerCase().split(' ');
        const translatedWords = words.map(word => dictionary[word] || word);
        const translatedText = translatedWords.join(' ');
        res.json({ translatedText: translatedText });
    } catch (error) {
        console.error('Translation error:', error);
        res.status(500).json({ translatedText: 'Error translating text.' });
    }
});

// The "catchall" handler: for any request that doesn't match one above
app.get('*', (req, res) => {
    res.send('Page not found!');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
