// function signinFetchFunction(username, pass, taille, poids) {
//     try {
//         const response = fetch("http://localhost:3000/signin", {
//             method: "POST",
//             // mode: "no-cors",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify({
//                 "username": username,
//                 "password": pass,
//                 "poids": poids,
//                 "taille": taille
//             }),
//         });

//         if (response.status == 409) {
//             return "";
//         }
//         const data = response.json();
//         return data.token;
//     } catch (error) {
//         console.error("Error during sign-in:", error);
//         throw error;
//     }
// }

function signinFunction() {
    const username = document.getElementById("username_signin").value;
    const pass = document.getElementById("pass_signin").value;
    const taille = document.getElementById("taille_signin").value;
    const poids = document.getElementById("poids_signin").value;

    try {
        signinFetchFunction(username, pass, taille, poids);
        window.location.href = "../index.html";
    } catch (error) {
        console.error("Error during sign-in:", error);
    }
}

function signinFetchFunction(username, pass, taille, poids) {
    try {
        fetch("http://localhost:3000/signin", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ "username": username, "password": pass, "taille": taille, "poids": poids }),
        })
        .then(res => {
            return res.json()
        })
        .then(data => {
            localStorage.setItem("token", data["token"]);
        })
        .catch(error => {
            console.log("Error")
        })
    } catch (error) {
        console.error("Error during fetch:", error);
        throw error;
    }
}
