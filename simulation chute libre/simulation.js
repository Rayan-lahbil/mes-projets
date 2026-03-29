function calculer() {
    const hauteur = parseFloat(document.getElementById("hauteur").value);
    const masse = parseFloat(document.getElementById("masse").value);
    const g = parseFloat(document.getElementById("planete").value);
    const erreurDiv = document.getElementById("erreur");

    if (!hauteur || !masse || hauteur <= 0 || masse <= 0) {
        erreurDiv.textContent = "Veuillez entrer des valeurs valides !";
        return;
    }

    erreurDiv.textContent = "";

    const temps = Math.sqrt(2 * hauteur / g);
    const vitesse = g * temps;
    const ec = 0.5 * masse * vitesse * vitesse;
    const ep = masse * g * hauteur;

    document.getElementById("formule-temps").textContent = 
        "t = √(2h/g) = √(2 × " + hauteur + " / " + g + ")";
    document.getElementById("res-temps").textContent = 
        temps.toFixed(2) + " secondes";

    document.getElementById("formule-vitesse").textContent = 
        "v = g × t = " + g + " × " + temps.toFixed(2);
    document.getElementById("res-vitesse").textContent = 
        vitesse.toFixed(2) + " m/s";

    document.getElementById("formule-ec").textContent = 
        "Ec = ½mv² = ½ × " + masse + " × " + vitesse.toFixed(2) + "²";
    document.getElementById("res-ec").textContent = 
        ec.toFixed(2) + " Joules";

    document.getElementById("formule-ep").textContent = 
        "Ep = mgh = " + masse + " × " + g + " × " + hauteur;
    document.getElementById("res-ep").textContent = 
        ep.toFixed(2) + " Joules";

    document.getElementById("resultats").classList.remove("cache");
}

function reset() {
    document.getElementById("hauteur").value = "";
    document.getElementById("masse").value = "";
    document.getElementById("resultats").classList.add("cache");
    document.getElementById("erreur").textContent = "";
}