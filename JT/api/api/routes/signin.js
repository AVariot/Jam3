// const db = require('../config/db.js');
// const jwt = require('jsonwebtoken');
// const secretKey = 'a2f4b978b4e89347e906b7c16ae3d9f98d3f67d9ed9e7a2f9b5f4c8a56e3b2d4';
// const { promisify } = require('util');

// const executeAsync = promisify(db.execute.bind(db));

//     app.post('/signin', async (req, res) => {
//         // const { username, password, poids, taille } = req.body;

//         res.send("caca");

//         // try {
//         //     const [resultat] = await executeAsync("SELECT * FROM user WHERE username = ?", [username]);
//         //     if (resultat.length != 0) {
//         //         return res.status(409).send({ "msg": "User already exists" });
//         //     }
//         //     await executeAsync(
//         //         "INSERT INTO user (username, password, poids, taille) VALUES (?, ?, ?, ?)",
//         //         [username, password, poids, taille]
//         //     );
//         //     const token = jwt.sign({ username: username }, secretKey);
//         //     res.json({ 'token': token });
//         // } catch (err) {
//         //     res.status(500).send({ "msg": "Erreur serveur" });
//         // }
//     });

// module.exports = signin;
