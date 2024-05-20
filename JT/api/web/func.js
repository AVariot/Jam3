function selectFunction() {
    const name = document.getElementById("name-select").textContent;
    localStorage.setItem("choice", name)
    window.location.href = "../trainpage/train.html";
}

function trainFunction() {
    const name = localStorage.getItem("choice")
    seance = ""
    if (name === "Francis Ngannou") {
        seance = ["Developper coucher : 4 series de 12 repetitions\nbutterfly : 4 series de 15 repetitions\ncurl : 4 series de 12 repetitions\ndips : 4 series de 8 repetitions\nsquat : 4 series de 15 repetitions"];
    } else {
        seance = ["Developper coucher : 4 series de 15 repetitions\ntraction : 3 series de 8 repetitions\nsquat : 4 series de 20 repetitions\nmarteau : 4 series de 15 repetition\ntirage_pouli : 4 series de 15 repetitions"];
    }
    document.getElementById("editable-text").placeholder = seance
}

function getStreakNumber() {
    try {
        const token = localStorage.getItem("token");
        console.log("MYTOKEN:", token)
        if (!token) {
            console.error("Token not found in localStorage");
            return; // Arrêter la fonction si le token n'est pas trouvé
        }

        // Construire l'URL avec les paramètres de requête
        const url = new URL("http://localhost:3000/getstreak");

        fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "token": token
            },
        })
        .then(res => {
            return res.json();
        })
        .then(data => {
            console.log("data:", data["msg"][0]["streak"]);
            document.getElementById("counter").innerText = data["msg"][0]["streak"];
        })
        .catch(error => {
            console.log("Error:", error);
        });
    } catch (error) {
        console.error("Error during fetch:", error);
        throw error;
    }
}


function setStreakNumber() {
    const streak =  Number(document.getElementById("counter").innerText) + 1;
    console.log("POST STREAK:", streak);
    try {
        fetch("http://localhost:3000/setstreak", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ "token": localStorage.getItem("token"), "streak": streak }),
        })
        .then(res => {
            console.log("res:", res.json());
            window.location.href = "../index.html";
        })
        .catch(error => {
            console.log("Error")
        })
    } catch (error) {
        console.error("Error during fetch:", error);
        throw error;
    }
}
