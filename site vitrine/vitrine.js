function envoyer() {
    const nom = document.getElementById("nom").value.trim();
    const email = document.getElementById("email").value.trim();
    const sujet = document.getElementById("sujet").value.trim();
    const message = document.getElementById("message-text").value.trim();
    const messageForm = document.getElementById("message-form");

    if (!nom || !email || !sujet || !message) {
        messageForm.style.color = "#e74c3c";
        messageForm.textContent = "Veuillez remplir tous les champs !";
        return;
    }

    if (!email.includes("@") || !email.includes(".")) {
        messageForm.style.color = "#e74c3c";
        messageForm.textContent = "Adresse email invalide !";
        return;
    }

    messageForm.style.color = "#2ecc71";
    messageForm.textContent = "Message envoyé ! Nous vous répondrons sous 24h.";

    document.getElementById("nom").value = "";
    document.getElementById("email").value = "";
    document.getElementById("sujet").value = "";
    document.getElementById("message-text").value = "";
}

function scrollToContact() {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
}