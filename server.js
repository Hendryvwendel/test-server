
const express = require('express');
const admin = require('firebase-admin');
const bcrypt = require('bcrypt');
const path = require('path');
const { join } = require('path');


let staticPath = path.join(__dirname, "public");

const app = express();

app.use(express.static(staticPath));


app.get("/", (req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
})

// signup
app.get("/signup", (req, res) => {
    res.sendFile(pat.join(staticPath, "signup.html"))
})

// 404 redirect 
app.get("/404", (req, res) => {
    res.sendFile(path.join(staticPath, "404.html"))
})

app.use((req, res) => {
    res.redirect("/404")
})


//opens port 3000
app.listen(3000, () => {
    console.log('listening on port 3000.......')
})