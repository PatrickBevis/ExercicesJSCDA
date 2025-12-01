// Exercice 1
document.getElementById("formulaire").addEventListener("submit", function(e) {
    e.preventDefault();

    const nom = document.getElementById("nom").value.trim();
    const age = document.getElementById("age").value.trim();
    const adresse = document.getElementById("adresse").value.trim();

    // 🔍 Vérifications avec TERNAIRES
    const nomValide = nom.length >= 2 ? true : false;
    const ageValide = !isNaN(age) && Number(age) > 0 ? true : false;
    const adresseValide = /\d+/.test(adresse) && /[A-Za-z]+/.test(adresse) ? true : false;

    // 🧾 Résumé formaté
    const message = 
`=== Résultat du formulaire ===
Nom : ${nomValide ? nom : "❌ Nom invalide (minimum 2 caractères)"}
Âge : ${ageValide ? age : "❌ Âge invalide (nombre > 0)"}
Adresse : ${adresseValide ? adresse : "❌ Adresse invalide (numéro + nom de rue)"}`;

    document.getElementById("resultat").textContent = message;
});
