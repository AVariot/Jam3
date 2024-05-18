async function signinFetchFunction(username, pass, poids, taille) {
    try {
        const response = await fetch("http://localhost:3000/signin", {
            method: "POST",
            // mode: "no-cors",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "username": username,
                "password": pass,
                "poids": poids,
                "taille": taille
            }),
        });

        if (response.status == 409) {
            return "";
        }
        const data = await response.json();
        return data.token;
    } catch (error) {
        console.error("Error during sign-in:", error);
        throw error;
    }
}

async function signinFunction() {
    const token = await signinFetchFunction("test", "test", 10, 20);
    if (token !== "") {
        localStorage.setItem("token", token);
        window.location.href = "../index.html";
    }
}
