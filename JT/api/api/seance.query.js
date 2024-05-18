function create_exo(name, serie, rep, poids, db) {
    db.execute("INSERT INTO {name} (serie, rep, poids) VALUE (?, ?, ?)", [serie, rep, poids], function (err, res, fields) {
        if (err) {
            return 84;
        }
        return res[id];
    });
}

function create_seance(name, db) {
    const francis = ["dc", "butterfly", "curl", "dips", "squat"];
    const toma = ["dc", "traction", "squat", "marteau", "tirage_pouli"];
    list_id = [];

    if (name === "francis_nganou") {
            const dc = create_exo("dc", 4, 12, 30);
            const but = create_exo("butterfly", 4, 10, 66);
            const curl = create_exo("curl", 4, 15, 14);
            const dips = create_exo("dips", 4, 12, 24);
            const squat = create_exo("squat", 4, 15, 140);
            db.execute("INSERT INTO exo (butterfly_id, cardio_id, curl_id, curl_marteau_id, dc_id, dips_id, fente_id, squat_id, tirage_pouli_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
                (but, 0, curl, 0, dc, dips, 0, squat, 0), function (err, res, fields) {
                    if (err)
                        return 84
                    return res[id];
                }
            );
    } else {
            const dc = create_exo("dc", 4, 10, 24);
            const squat = create_exo("squat", 4, 12, 110);
            const mart = create_exo("marteau", 4, 15, 14);
            const tir = create_exo("tirage_pouli", 4, 12, 54);

            db.execute("INSERT INTO exo (butterfly_id, cardio_id, curl_id, curl_marteau_id, dc_id, dips_id, fente_id, squat_id, tirage_pouli_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
                (0, 0, 0, mart, dc, 0, 0, squat, tir), function (err, res, fields) {
                    if (err)
                        return 84
                    return res[id];
                }
            );
    }
}
