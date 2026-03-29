const articles = [
    {
        id: 1,
        titre: "Apprendre Python en partant de zéro",
        categorie: "python",
        date: "15 Mars 2025",
        icone: "🐍",
        couleur: "#3572A5"
    },
    {
        id: 2,
        titre: "HTML et CSS : créer sa première page web",
        categorie: "web",
        date: "18 Mars 2025",
        icone: "🌐",
        couleur: "#e94560"
    },
    {
        id: 3,
        titre: "Le tri à bulles expliqué simplement",
        categorie: "algorithmique",
        date: "20 Mars 2025",
        icone: "🔄",
        couleur: "#533483"
    },
    {
        id: 4,
        titre: "Introduction au SQL pour débutants",
        categorie: "sql",
        date: "22 Mars 2025",
        icone: "🗄️",
        couleur: "#0f3460"
    },
    {
        id: 5,
        titre: "Créer un jeu en Python : le pendu",
        categorie: "python",
        date: "24 Mars 2025",
        icone: "🎮",
        couleur: "#2ecc71"
    },
    {
        id: 6,
        titre: "JavaScript : rendre ses pages web interactives",
        categorie: "web",
        date: "26 Mars 2025",
        icone: "⚡",
        couleur: "#f39c12"
    },
    {
        id: 7,
        titre: "Créer un jeu en Python : le quiz",
        categorie: "python",
        date: "27 Mars 2025",
        icone: "📋",
        couleur: "#3572A5"
    },
    {
        id: 8,
        titre: "La récursivité expliquée avec des exemples",
        categorie: "algorithmique",
        date: "28 Mars 2025",
        icone: "🔁",
        couleur: "#533483"
    },
    {
        id: 9,
        titre: "SQL : les jointures entre tables",
        categorie: "sql",
        date: "29 Mars 2025",
        icone: "🔗",
        couleur: "#0f3460"
    }
];

let categorieActive = "tous";
let rechercheTerm = "";

function afficherArticles(liste) {
    const grille = document.getElementById("grille-articles");
    const aucun = document.getElementById("aucun-resultat");

    grille.innerHTML = "";

    if (liste.length === 0) {
        aucun.classList.remove("cache");
        return;
    }

    aucun.classList.add("cache");

    liste.forEach(function(article) {
        const carte = document.createElement("div");
        carte.classList.add("article-carte");
        carte.innerHTML = `
            <div class="article-image" style="background-color: ${article.couleur}">
                ${article.icone}
            </div>
            <div class="article-contenu">
                <span class="article-tag">${article.categorie.toUpperCase()}</span>
                <div class="article-titre">${article.titre}</div>
                <div class="article-meta">
                    <span>${article.date}</span>
                    <span class="article-lire">Lire →</span>
                </div>
            </div>
        `;
        grille.appendChild(carte);
    });
}

function filtrer(categorie) {
    categorieActive = categorie;
    rechercheTerm = "";
    document.getElementById("recherche").value = "";

    document.querySelectorAll(".cat-btn").forEach(function(btn) {
        btn.classList.remove("actif");
    });

    event.target.classList.add("actif");
    appliquerFiltres();
}

function rechercher() {
    rechercheTerm = document.getElementById("recherche").value.toLowerCase();
    categorieActive = "tous";
    document.querySelectorAll(".cat-btn").forEach(function(btn) {
        btn.classList.remove("actif");
    });
    document.querySelector(".cat-btn").classList.add("actif");
    appliquerFiltres();
}

function appliquerFiltres() {
    let resultats = articles;

    if (categorieActive !== "tous") {
        resultats = resultats.filter(function(a) {
            return a.categorie === categorieActive;
        });
    }

    if (rechercheTerm !== "") {
        resultats = resultats.filter(function(a) {
            return a.titre.toLowerCase().includes(rechercheTerm);
        });
    }

    afficherArticles(resultats);
}

function sinscrire() {
    const email = document.getElementById("email-newsletter").value.trim();
    const message = document.getElementById("message-newsletter");

    if (!email || !email.includes("@") || !email.includes(".")) {
        message.style.color = "#e74c3c";
        message.textContent = "Adresse email invalide !";
        return;
    }

    message.style.color = "#2ecc71";
    message.textContent = "Inscription confirmée ! Tu recevras les prochains articles.";
    document.getElementById("email-newsletter").value = "";
}

afficherArticles(articles);