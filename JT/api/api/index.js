const express = require("express");
const app = express();
const PORT = 3000;
const bodyParser = require('body-parser');
const db = require('./config/db.js');
const jwt = require('jsonwebtoken');
const secretKey = 'a2f4b978b4e89347e906b7c16ae3d9f98d3f67d9ed9e7a2f9b5f4c8a56e3b2d4';
const seance = require('./seance.query.js')
const cors = require('cors');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/streak', async (req, res) => {
    const { token } = req.body;
    decoded = ""
    try {
        decoded = jwt.verify(token, secretKey);
    } catch (err) {
        return res.status(500).send({"msg": "Error intern"})
    }
    const username = decoded["username"];

    db.execute("SELECT * FROM user WHERE username = ?", [username], function (err, resultat, fields) {
        if (err) {
            return res.status(500).send({"msg": "Error intern"})
        }

        db.execute("INSERT INTO user (streak) VALUES (?)", (streak), function (err, resul, fields) {
            if (err)
                return res.status(500).send({"msg": "Error intern"})
            return res.status(200).send({"streak": streak});
        })

    })
})

app.post('/streak', async (req, res) => {
    const { token, streak } = req.body;
    decoded = ""
    try {
        decoded = jwt.verify(token, secretKey);
    } catch (err) {
        return res.status(500).send({"msg": "Error intern"})
    }
    const username = decoded["username"];

    db.execute("SELECT * FROM user WHERE username = ?", [username], function (err, resultat, fields) {
        if (err) {
            return res.status(500).send({"msg": "Error intern"})
        }
        
        db.execute("INSERT INTO user (streak) VALUES (?)", (streak), function (err, resul, fields) {
            if (err)
                return res.status(500).send({"msg": "Error intern"})
            return res.status(200).send({"msg": "Good"});
        })

    })
})

app.post('/register_select', async (req, res) => {
    const { token, name } = req.body;
    decoded = ""
    try {
        decoded = jwt.verify(token, secretKey);
    } catch (err) {
        return res.status(500).send({"msg": "Error intern"})
    }
    const username = decoded["username"];

    db.execute("SELECT * FROM user WHERE username = ?", [username], function (err, resultat, fields) {
        if (err) {
            return res.status(500).send({"msg": "Error intern"})
        }
        
        const id = seance(name, db);
        if (id == 84) {
            return res.status(501).send({"msg": "Option invalid"});
        }
        db.execute("INSERT INTO user (exo_id) VALUES (?)", (id), function (err, resul, fields) {
            if (err)
                return res.status(500).send({"msg": "Error intern"})
            return res.status(200).send({"msg": "Good"});
        })

    })
})

app.get('/select', async (req, res) => {
    const { token } = req.body;
    decoded = ""
    try {
        decoded = jwt.verify(token, secretKey);
    } catch (err) {
        return res.status(500).send({"msg": "Error intern"})
    }
    const username = decoded["username"];

    db.execute("SELECT * FROM user WHERE username = ?", [username], function (err, resultat, fields) {
        if (err) {
            return res.status(500).send({"msg": "Error intern"})
        }

        const seance = {
            "francis_nganou": "dc|butterfly|curl|dips|squat",
            "toma_junior_popov": "dc|traction|squat|curl|marteau|dips|tirage_pouli"
        };        
        res.status(200).send(seance)

    })
})

app.get('/login', async (req, res) => {
    const { token } = req.body;
    decoded = ""
    try {
        decoded = jwt.verify(token, secretKey);
    } catch (err) {
        return res.status(500).send({"msg": "Error intern"})
    }
    const username = decoded["username"];

    db.execute("SELECT * FROM user WHERE username = ?", [username], function (err, resultat, fields) {
        if (err) {
            return res.status(500).send({"msg": "Error intern"})
        }
        if (resultat.length >= 1) {
            res.status(200).send({"msg": "ok"});
        } else {
            res.status(403).send({"msg": "Forbiden"});
        }
    })
})

app.post('/signin', async (req, res) => {
    const { username, password, poids, taille } = req.body;
    try {
        db.execute("SELECT * FROM user WHERE username = ?", [username], function (err, resultat, fields) {
            if (err) {
                res.status(500).send({"msg": err})
            }
            if (resultat.length >= 1) {
                return res.status(409).send({ "msg": "User already exists" });
            }
            db.execute("INSERT INTO user (username, password, poids, taille) VALUES (?, ?, ?, ?)", [username, password, poids, taille], function(err, resu, fields) {
                if (err) {
                    res.status(500).send({"msg": "Second call"})
                }
                const token = jwt.sign({ username: username }, secretKey);
                res.json({ 'token': token });
                res.status(200).send({"token": token});
            });
        });
    } catch (err) {
        res.status(500).send({"msg": "First call"})
    }
});

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})
