document.addEventListener("DOMContentLoaded", function () {
    let userInput = document.getElementById("date"); // Récupère l'input
    let result = document.getElementById("result"); // Récupère la zone résultat
    let button = document.getElementById("calculate-btn"); // Récupère le bouton

    userInput.max = new Date().toISOString().split("T")[0]; // Fixe la date max

    button.addEventListener("click", calculerAge); // Ajoute un event au bouton

    function calculerAge() {
        let birthdate = new Date(userInput.value);

        if (isNaN(birthdate)) {
            result.innerHTML = "❌ Veuillez entrer une date valide.";
            return;
        }

        let d1 = birthdate.getDate();
        let m1 = birthdate.getMonth() + 1;
        let y1 = birthdate.getFullYear();

        let today = new Date();
        let d2 = today.getDate();
        let m2 = today.getMonth() + 1;
        let y2 = today.getFullYear();

        let d3, m3, y3;
        y3 = y2 - y1;

        if (m2 >= m1) {
            m3 = m2 - m1;
        } else {
            y3--;
            m3 = 12 + m2 - m1;
        }

        if (d2 >= d1) {
            d3 = d2 - d1;
        } else {
            m3--;
            d3 = jourDansMois(y1, m1) + d2 - d1;
        }

        if (m3 < 0) {
            m3 = 11;
            y3--;
        }

        result.innerHTML = `🎉 Vous avez <strong>${y3}</strong> ans, <strong>${m3}</strong> mois et <strong>${d3}</strong> jours.`;
    }

    function jourDansMois(année, mois) {
        return new Date(année, mois, 0).getDate();
    }
});
