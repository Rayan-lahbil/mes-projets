function envoyer() {
    const prenom = document.getElementById("prenom").value.trim();
    const email = document.getElementById("email").value.trim();
    const situation = document.getElementById("situation").value;
    const message = document.getElementById("message-form");

    if (!prenom || !email || !situation) {
        message.style.color = "#e74c3c";
        message.textContent = "Veuillez remplir tous les champs !";
        return;
    }

    if (!email.includes("@") || !email.includes(".")) {
        message.style.color = "#e74c3c";
        message.textContent = "Adresse email invalide !";
        return;
    }

    message.style.color = "#2ecc71";
    message.textContent = "Merci " + prenom + " ! Le guide a été envoyé à " + email;

    document.getElementById("prenom").value = "";
    document.getElementById("email").value = "";
    document.getElementById("situation").value = "";
}