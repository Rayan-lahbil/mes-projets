let calcul = "";

function choisir(type) {
    calcul = type;

    document.querySelectorAll(".boutons-choix button").forEach(b => b.classList.remove("actif"));
    document.getElementById("btn-" + type).classList.add("actif");

    const champs = document.getElementById("champs");
    champs.innerHTML = "";

    if (type === "vitesse") {
        champs.innerHTML = `
            <div class="input-group">
                <label>Distance (m)</label>
                <input type="number" id="val1" placeholder="ex: 100">
            </div>
            <div class="input-group">
                <label>Temps (s)</label>
                <input type="number" id="val2" placeholder="ex: 10">
            </div>
        `;
    } else if (type === "distance") {
        champs.innerHTML = `
            <div class="input-group">
                <label>Vitesse (m/s)</label>
                <input type="number" id="val1" placeholder="ex: 10">
            </div>
            <div class="input-group">
                <label>Temps (s)</label>
                <input type="number" id="val2" placeholder="ex: 10">
            </div>
        `;
    } else if (type === "temps") {
        champs.innerHTML = `
            <div class="input-group">
                <label>Distance (m)</label>
                <input type="number" id="val1" placeholder="ex: 100">
            </div>
            <div class="input-group">
                <label>Vitesse (m/s)</label>
                <input type="number" id="val2" placeholder="ex: 10">
            </div>
        `;
    }

    document.getElementById("formulaire").classList.remove("cache");
    document.getElementById("resultat").classList.add("cache");
    document.getElementById("erreur").textContent = "";
}

function calculer() {
    const val1 = parseFloat(document.getElementById("val1").value);
    const val2 = parseFloat(document.getElementById("val2").value);
    const erreurDiv = document.getElementById("erreur");

    if (!val1 || !val2 || val1 <= 0 || val2 <= 0) {
        erreurDiv.textContent = "Veuillez entrer des valeurs valides !";
        return;
    }

    erreurDiv.textContent = "";
    let resultat = 0;
    let formule = "";
    let unite = "";
    let label = "";

    if (calcul === "vitesse") {
        resultat = val1 / val2;
        formule = "v = d / t = " + val1 + " / " + val2;
        unite = "m/s";
        label = "Vitesse";
    } else if (calcul === "distance") {
        resultat = val1 * val2;
        formule = "d = v × t = " + val1 + " × " + val2;
        unite = "m";
        label = "Distance";
    } else if (calcul === "temps") {
        resultat = val1 / val2;
        formule = "t = d / v = " + val1 + " / " + val2;
        unite = "s";
        label = "Temps";
    }

    document.getElementById("resultat-formule").textContent = formule;
    document.getElementById("resultat-valeur").textContent = 
        label + " = " + resultat.toFixed(2) + " " + unite;

    document.getElementById("resultat").classList.remove("cache");
}

function reset() {
    calcul = "";
    document.querySelectorAll(".boutons-choix button").forEach(b => b.classList.remove("actif"));
    document.getElementById("formulaire").classList.add("cache");
    document.getElementById("resultat").classList.add("cache");
    document.getElementById("erreur").textContent = "";
}