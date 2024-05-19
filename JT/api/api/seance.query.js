const db = require('./config/db.js');

function create_dc(name, serie, rep, poids) {
    id = 0
    var sql = "INSERT INTO dc (series, rep, poids) VALUES (?, ?, ?)";
    var values = [serie, rep, poids];

    db.query(sql, values, function (err, res) {
        id = res;
    })
    return id
}

function create_butter(name, serie, rep, poids) {
    db.execute("INSERT INTO butterfly (series, rep, poids) VALUES (?, ?, ?)", [serie, rep, poids], function (err, res, fields) {
        if (err) {
            return 84;
        }
        return res["insertId"];
    });
}

function create_curl(name, serie, rep, poids) {
    db.execute("INSERT INTO curl (series, rep, poids) VALUES (?, ?, ?)", [serie, rep, poids], function (err, res, fields) {
        if (err) {
            return 84;
        }
        return res["insertId"];
    });
}

function create_dips(name, serie, rep, poids) {
    db.execute("INSERT INTO dips (series, rep, poids) VALUES (?, ?, ?)", [serie, rep, poids], function (err, res, fields) {
        if (err) {
            return 84;
        }
        return res["insertId"];
    });
}

function create_squat(name, serie, rep, poids) {
    db.execute("INSERT INTO squat (series, rep, poids) VALUES (?, ?, ?)", [serie, rep, poids], function (err, res, fields) {
        if (err) {
            return 84;
        }
        return res["insertId"];
    });
}

function create_curl(name, serie, rep, poids) {
    db.execute("INSERT INTO curl (series, rep, poids) VALUES (?, ?, ?)", [serie, rep, poids], function (err, res, fields) {
        if (err) {
            return 84;
        }
        return res["insertId"];
    });
}

function create_mart(name, serie, rep, poids) {
    db.execute("INSERT INTO curl_marteau (series, rep, poids) VALUES (?, ?, ?)", [serie, rep, poids], function (err, res, fields) {
        if (err) {
            return 84;
        }
        return res["insertId"];
    });
}

function create_tir(name, serie, rep, poids) {
    db.execute("INSERT INTO tirage_pouli (series, rep, poids) VALUES (?, ?, ?)", [serie, rep, poids], function (err, res, fields) {
        if (err) {
            return 84;
        }
        return res["insertId"];
    });
}

function create_seance(name) {
    const francis = ["dc", "butterfly", "curl", "dips", "squat"];
    const toma = ["dc", "traction", "squat", "marteau", "tirage_pouli"];

    console.log("seance_name:", name, " ,huh", "huh");

    if (name === "Francis Ngannou") {
        console.log("In Francis");
        const dc = create_dc("dc", 4, 12, 30);
        const but = create_butter("butterfly", 4, 10, 66);
        const curl = create_curl("curl", 4, 15, 14);
        const dips = create_dips("dips", 4, 12, 24);
        const squat = create_squat("squat", 4, 15, 140);
        console.log("dc:", dc);
        db.execute("INSERT INTO exo (butterfly_id, cardio_id, curl_id, curl_marteau_id, dc_id, dips_id, fente_id, squat_id, tirage_pouli_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
            [but, 0, curl, 0, dc, dips, 0, squat, 0], function (err, res, fields) {
                if (err)
                    return 84
                console.log("id: ", res);
                return res;
            }
        );
    } else {
        const dc = create_dc("dc", 4, 10, 24);
        const squat = create_squat("squat", 4, 12, 110);
        const mart = create_mart("marteau", 4, 15, 14);
        const tir = create_tir("tirage_pouli", 4, 12, 54);

        db.execute("INSERT INTO exo (butterfly_id, cardio_id, curl_id, curl_marteau_id, dc_id, dips_id, fente_id, squat_id, tirage_pouli_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
            (0, 0, 0, mart, dc, 0, 0, squat, tir), function (err, res, fields) {
                if (err)
                    return 84
                return res["insertId"];
            }
        );
    }
}

module.exports = { create_seance }
