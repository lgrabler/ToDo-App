const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
 
const app = express();
const PORT = 5000;
 
app.use(cors());
app.use(bodyParser.json());
 
let notes = [];
 
app.post('/', (req, res) => {
    const { content } = req.body;
    const id = notes.length + 1;
    notes.push({ id, content });
    res.status(201).json({ id, content });
});
 
app.get('/', (req, res) => {
    res.json(notes);
});
 
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});