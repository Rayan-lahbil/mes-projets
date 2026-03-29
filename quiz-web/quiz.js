const questions = [
    {
        question: "Qu'est-ce qu'un algorithme ?",
        choix: ["A. Un langage de programmation", "B. Une suite d'instructions pour résoudre un problème", "C. Un type de processeur", "D. Un logiciel antivirus"],
        reponse: 1
    },
    {
        question: "Que fait la fonction print() en Python ?",
        choix: ["A. Elle imprime un document", "B. Elle supprime du texte", "C. Elle affiche du texte dans le terminal", "D. Elle crée une variable"],
        reponse: 2
    },
    {
        question: "À quoi sert une base de données SQL ?",
        choix: ["A. Créer des images", "B. Stocker et organiser des informations", "C. Naviguer sur internet", "D. Programmer des jeux"],
        reponse: 1
    },
    {
        question: "Quel langage est principalement utilisé pour créer des pages web ?",
        choix: ["A. Python", "B. HTML", "C. Java", "D. C++"],
        reponse: 1
    },
    {
        question: "Parmi ces propositions, laquelle est un langage de programmation ?",
        choix: ["A. Google", "B. Windows", "C. Python", "D. Excel"],
        reponse: 2
    }
];

let questionActuelle = 0;
let score = 0;
let reponduQuestion = false;

function afficherQuestion() {
    const q = questions[questionActuelle];
    
    document.getElementById("progression").textContent = 
        "Question " + (questionActuelle + 1) + " / " + questions.length;
    
    document.getElementById("question").textContent = q.question;
    document.getElementById("message").textContent = "";
    document.getElementById("btn-suivant").style.display = "none";
    reponduQuestion = false;

    const divChoix = document.getElementById("choix");
    divChoix.innerHTML = "";

    q.choix.forEach(function(choix, index) {
        const bouton = document.createElement("button");
        bouton.textContent = choix;
        bouton.classList.add("bouton-choix");
        bouton.onclick = function() { verifierReponse(index, bouton); };
        divChoix.appendChild(bouton);
    });
}

function verifierReponse(indexChoisi, boutonClique) {
    if (reponduQuestion) return;
    reponduQuestion = true;

    const q = questions[questionActuelle];
    const tousLesBoutons = document.querySelectorAll(".bouton-choix");

    tousLesBoutons.forEach(function(b) {
        b.onclick = null;
    });

    if (indexChoisi === q.reponse) {
        boutonClique.classList.add("correct");
        document.getElementById("message").textContent = "Bonne réponse !";
        score++;
    } else {
        boutonClique.classList.add("incorrect");
        tousLesBoutons[q.reponse].classList.add("correct");
        document.getElementById("message").textContent = 
            "Mauvaise réponse ! La bonne réponse était : " + q.choix[q.reponse];
    }

    document.getElementById("btn-suivant").style.display = "block";
}

function questionSuivante() {
    questionActuelle++;

    if (questionActuelle < questions.length) {
        afficherQuestion();
    } else {
        afficherResultat();
    }
}

function afficherResultat() {
    document.getElementById("quiz").style.display = "none";
    document.getElementById("resultat").classList.remove("cache");

    document.getElementById("score").textContent = score + " / " + questions.length;

    let commentaire = "";
    if (score === 5) {
        commentaire = "Parfait, tu es un génie !";
    } else if (score >= 3) {
        commentaire = "Bien joué, continue comme ça !";
    } else {
        commentaire = "Continue à travailler, tu vas progresser !";
    }
    document.getElementById("commentaire").textContent = commentaire;
}

function recommencer() {
    questionActuelle = 0;
    score = 0;
    reponduQuestion = false;
    document.getElementById("quiz").style.display = "block";
    document.getElementById("resultat").classList.add("cache");
    afficherQuestion();
}

afficherQuestion();