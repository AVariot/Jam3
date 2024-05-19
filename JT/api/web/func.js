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

// async function signinFunction() {
//     const username = document.getElementById("username_signin").value;
//     const pass = document.getElementById("pass_signin").value;
//     const taille = document.getElementById("taille_signin").value;
//     const poids = document.getElementById("poids_signin").value;
    
//     try {
//         const token = await signinFetchFunction(username, pass, taille, poids);
//         if (token !== "") {
//             localStorage.setItem("token", token);
//         }
//     } catch (error) {
//         console.error("Error during sign-in:", error);
//     }
// }

// // Assurez-vous que signinFetchFunction renvoie une promesse qui se résout avec le token
// async function signinFetchFunction(username, pass, taille, poids) {
//     try {
//         const response = await fetch("http://localhost:3000/signin", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify({ username, pass, taille, poids }),
//         });

//         if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`);
//         }

//         const data = await response.json();
//         return data.token;
//     } catch (error) {
//         console.error("Error during fetch:", error);
//         throw error; // Propager l'erreur pour la gestion ultérieure
//     }
// }

// document.getElementById('signinForm').addEventListener('submit', function(event) {
//     event.preventDefault();
//     signinFunction();
//     window.location.href = "../index.html";
// });
