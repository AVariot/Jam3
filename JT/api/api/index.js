const express = require("express");
const app = express();
const PORT = 3000;
const bodyParser = require('body-parser');
const db = require('./config/db.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/signin', async (req, res) => {
    const { username, password, poids, taille } = req.body;
    res.send(password);
    // try {
    //     const [resultat] = await executeAsync("SELECT * FROM user WHERE username = ?", [username]);
    //     if (resultat.length != 0) {
    //         return res.status(409).send({ "msg": "User already exists" });
    //     }
    //     await executeAsync(
    //         "INSERT INTO user (username, password, poids, taille) VALUES (?, ?, ?, ?)",
    //         [username, password, poids, taille]
    //     );
    //     const token = jwt.sign({ username: username }, secretKey);
    //     res.json({ 'token': token });
    // } catch (err) {
    //     res.status(500).send({ "msg": "Erreur serveur" });
    // }
});


app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
  })
