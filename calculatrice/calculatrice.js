let expression = "";
let nouveauNombre = true;

function appuyer(valeur) {
    if (nouveauNombre && !isNaN(valeur)) {
        expression = valeur;
        nouveauNombre = false;
    } else {
        expression += valeur;
    }
    mettreAJourAffichage();
}

function appuyerFonction(valeur) {
    expression += valeur;
    nouveauNombre = false;
    mettreAJourAffichage();
}

function mettreAJourAffichage() {
    const affichage = document.getElementById("affichage");
    const expressionDiv = document.getElementById("expression");

    let affichageTexte = expression
        .replace(/Math\.sin\(/g, "sin(")
        .replace(/Math\.cos\(/g, "cos(")
        .replace(/Math\.tan\(/g, "tan(")
        .replace(/Math\.sqrt\(/g, "√(")
        .replace(/Math\.log\(/g, "log(")
        .replace(/Math\.PI/g, "π")
        .replace(/\*\*/g, "^")
        .replace(/\*/g, "×")
        .replace(/\//g, "÷");

    affichage.textContent = affichageTexte || "0";
    expressionDiv.textContent = affichageTexte;
}

function calculer() {
    if (expression === "") return;

    try {
        document.getElementById("expression").textContent =
            expression
                .replace(/Math\.sin\(/g, "sin(")
                .replace(/Math\.cos\(/g, "cos(")
                .replace(/Math\.tan\(/g, "tan(")
                .replace(/Math\.sqrt\(/g, "√(")
                .replace(/Math\.log\(/g, "log(")
                .replace(/Math\.PI/g, "π")
                .replace(/\*\*/g, "^")
                .replace(/\*/g, "×")
                .replace(/\//g, "÷") + " =";

        let resultat = eval(expression);

        if (typeof resultat === "number") {
            resultat = parseFloat(resultat.toFixed(10));
        }

        document.getElementById("affichage").textContent = resultat;
        expression = String(resultat);
        nouveauNombre = true;

    } catch (e) {
        document.getElementById("affichage").textContent = "Erreur";
        expression = "";
        nouveauNombre = true;
    }
}

function effacerTout() {
    expression = "";
    nouveauNombre = true;
    document.getElementById("affichage").textContent = "0";
    document.getElementById("expression").textContent = "";
}

function effacerDernier() {
    expression = expression.slice(0, -1);
    nouveauNombre = false;
    mettreAJourAffichage();
    if (expression === "") {
        document.getElementById("affichage").textContent = "0";
    }
}