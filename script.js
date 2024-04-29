document.addEventListener("DOMContentLoaded", function() {
    const rules = [
        {
            title: "Respect des autres joueurs",
            description: "Tout joueur doit respecter les autres joueurs du serveur, qu'ils soient administrateurs ou non. Aucune insulte ou comportement inapproprié ne sera toléré."
        },
        {
            title: "RP réaliste",
            description: "Les joueurs doivent maintenir un niveau de roleplay réaliste en tout temps. Cela inclut les actions, les dialogues et les interactions avec l'environnement."
        },
        {
            title: "Pas de métagaming",
            description: "Le métagaming, c'est-à-dire l'utilisation d'informations hors jeu pour influencer le jeu, est strictement interdit. Les joueurs doivent agir uniquement en fonction des informations disponibles dans le jeu."
        }
    ];

    const rulesList = document.getElementById("rules-list");

    rules.forEach(rule => {
        const ruleElement = document.createElement("div");
        ruleElement.classList.add("rule");
        ruleElement.innerHTML = `
            <h2>${rule.title}</h2>
            <p class="rule-name">${rule.description}</p>
        `;
        rulesList.appendChild(ruleElement);
    });
});
