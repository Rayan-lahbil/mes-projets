const mots = [
    "python", "algorithme", "informatique", "clavier", 
    "ordinateur", "javascript", "html", "css", 
    "variable", "fonction", "boucle", "liste"
];

let motSecret = "";
let lettresTrouvees = [];
let lettresRatees = [];
let essaisRestants = 6;
let partieTerminee = false;

const canvas = document.getElementById("pendu");
const ctx = canvas.getContext("2d");

function dessinerPendu(erreurs) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = "#e94560";
    ctx.lineWidth = 3;
    ctx.lineCap = "round";

    if (erreurs >= 1) {
        ctx.beginPath();
        ctx.moveTo(20, 240);
        ctx.lineTo(180, 240);
        ctx.stroke();
    }
    if (erreurs >= 2) {
        ctx.beginPath();
        ctx.moveTo(60, 240);
        ctx.lineTo(60, 20);
        ctx.stroke();
    }
    if (erreurs >= 3) {
        ctx.beginPath();
        ctx.moveTo(60, 20);
        ctx.lineTo(140, 20);
        ctx.stroke();
    }
    if (erreurs >= 4) {
        ctx.beginPath();
        ctx.moveTo(140, 20);
        ctx.lineTo(140, 50);
        ctx.stroke();
    }
    if (erreurs >= 5) {
        ctx.beginPath();
        ctx.arc(140, 70, 20, 0, Math.PI * 2);
        ctx.stroke();
    }
    if (erreurs >= 6) {
        ctx.beginPath();
        ctx.moveTo(140, 90);
        ctx.lineTo(140, 160);
        ctx.moveTo(140, 110);
        ctx.lineTo(115, 140);
        ctx.moveTo(140, 110);
        ctx.lineTo(165, 140);
        ctx.moveTo(140, 160);
        ctx.lineTo(115, 190);
        ctx.moveTo(140, 160);
        ctx.lineTo(165, 190);
        ctx.stroke();
    }
}

function afficherMot() {
    const divMot = document.getElementById("mot");
    divMot.innerHTML = "";
    for (const lettre of motSecret) {
        const span = document.createElement("span");
        span.classList.add("lettre");
        if (lettresTrouvees.includes(lettre)) {
            span.textContent = lettre;
        } else {
            span.textContent = "";
        }
        divMot.appendChild(span);
    }
}

function creerAlphabet() {
    const divAlphabet = document.getElementById("alphabet");
    divAlphabet.innerHTML = "";
    const lettres = "abcdefghijklmnopqrstuvwxyz";
    for (const lettre of lettres) {
        const bouton = document.createElement("button");
        bouton.textContent = lettre.toUpperCase();
        bouton.classList.add("btn-lettre");
        bouton.onclick = function() { proposerLettre(lettre, bouton); };
        divAlphabet.appendChild(bouton);
    }
}

function proposerLettre(lettre, bouton) {
    if (partieTerminee) return;

    bouton.classList.add("utilisee");
    bouton.onclick = null;

    if (motSecret.includes(lettre)) {
        lettresTrouvees.push(lettre);
        bouton.classList.add("correcte");
    } else {
        lettresRatees.push(lettre);
        bouton.classList.add("incorrecte");
        essaisRestants--;
    }

    dessinerPendu(6 - essaisRestants);
    afficherMot();
    mettreAJourEssais();
    verifierFin();
}

function mettreAJourEssais() {
    document.getElementById("essais").textContent = 
        "Essais restants : " + essaisRestants;
    
    if (lettresRatees.length > 0) {
        document.getElementById("lettres-ratees").textContent = 
            "Ratées : " + lettresRatees.join(" ");
    }
}

function verifierFin() {
    const motAffiche = motSecret.split("").every(l => lettresTrouvees.includes(l));

    if (motAffiche) {
        partieTerminee = true;
        document.getElementById("message").textContent = "Bravo ! Tu as gagné !";
        document.getElementById("message").style.color = "#2ecc71";
        document.getElementById("btn-rejouer").style.display = "block";
    } else if (essaisRestants === 0) {
        partieTerminee = true;
        afficherMotComplet();
        document.getElementById("message").textContent = "Perdu ! Le mot était : " + motSecret;
        document.getElementById("message").style.color = "#e74c3c";
        document.getElementById("btn-rejouer").style.display = "block";
    }
}

function afficherMotComplet() {
    const divMot = document.getElementById("mot");
    divMot.innerHTML = "";
    for (const lettre of motSecret) {
        const span = document.createElement("span");
        span.classList.add("lettre");
        span.textContent = lettre;
        if (!lettresTrouvees.includes(lettre)) {
            span.style.color = "#e74c3c";
        }
        divMot.appendChild(span);
    }
}

function nouvellePartie() {
    motSecret = mots[Math.floor(Math.random() * mots.length)];
    lettresTrouvees = [];
    lettresRatees = [];
    essaisRestants = 6;
    partieTerminee = false;

    document.getElementById("message").textContent = "";
    document.getElementById("lettres-ratees").textContent = "";
    document.getElementById("btn-rejouer").style.display = "none";

    dessinerPendu(0);
    afficherMot();
    creerAlphabet();
    mettreAJourEssais();
}

nouvellePartie();