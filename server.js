// Dependencies

const express = require('express');
const path = require('path');
const fs = require('fs')

const app = express();
const PORT = 3000;




// HTML Routes


app.get('*', (request, response) => response.sendFile(path.join(__dirname, '/public/index.html')));

app.get('/notes', (request, response) => response.sendFile(path.join(__dirname, '/public/notes.html')));


// API Routes

//app.get('/api/notes', (request, response))
















// Listener
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
