const express = require("express");
const app = express();
const PORT = 3000;
const bodyParser = require('body-parser');
const db = require('./config/db.js');
const jwt = require('jsonwebtoken');
const secretKey = 'a2f4b978b4e89347e906b7c16ae3d9f98d3f67d9ed9e7a2f9b5f4c8a56e3b2d4';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/login', async (req, res) => {
    const { token } = req.body;
})

app.post('/signin', async (req, res) => {
    const { username, password, poids, taille } = req.body;
    if (!username || !password || !poids || !taille) {
        res.status(201).send({"msg": "Need 4 parameters"});
    }
    try {
        db.execute("SELECT * FROM user WHERE username = ?", [username], function (err, resultat, fields) {
            if (err) {
                res.status(500).send({"msg": "Error intern"})
            }
            if (resultat.length >= 1) {
                return res.status(409).send({ "msg": "User already exists" });
            }
            db.execute("INSERT INTO user (username, password, poids, taille) VALUES (?, ?, ?, ?)", [username, password, poids, taille], function(err, resu, fields) {
                if (err) {
                    res.status(500).send({"msg": "Error intern"})
                }
                const token = jwt.sign({ username: username }, secretKey);
                res.json({ 'token': token });
                res.status(200).send({"token": token});
            });
        });
    } catch (err) {
        res.status(500).send({"msg": "Error intern"})
    }
});


app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})
