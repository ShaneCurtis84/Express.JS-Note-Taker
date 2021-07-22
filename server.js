// Dependencies

const express = require('express');
const path = require('path');
const fs = require('fs')
const { v4: uuidv4 } = require('uuid');
const database = require("./db/db")


//Express Setup
const app = express();
const PORT = 3000;


// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serving Public Folder

app.use(express.static('public'))


// HTML Routes


app.get('/', (request, response) => response.sendFile(path.join(__dirname, '/public/index.html')));

app.get('/notes', (request, response) => response.sendFile(path.join(__dirname, '/public/notes.html')));


// API Routes

// Get notes from the database

app.get('/api/notes', (request, response) => {

    
    
    response.json(database)

});

// Post new notes to the database

app.post('/api/notes', (request, response) => {
   
      
    //Variable for to request only body 
   
     let createNote = request.body;
     let dbPath = path.join(__dirname, "/db/db.json");

     // Adds an id to each new note

    createNote.id = uuidv4();

    



    database.push(createNote)

    fs.writeFile(dbPath, JSON.stringify(database), function (error) {

        if (error) {
            return console.log(error);
        }
        console.log("Note saved!");
    });

    response.json(database);
});
















// Listener
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
