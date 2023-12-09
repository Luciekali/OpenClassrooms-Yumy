const form = document.forms.form
const storeRadios = document.getElementsByName("storeRadio")
const cards = document.querySelectorAll(".store__restaurants-items")
const radioMissingText = document.querySelector(".radioMissingContent")


// Quand pas de selection
form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (Array.from(storeRadios).every(radio => radio.checked === false)) {
        radioMissingText.style.visibility = "visible"
        cards.forEach(card => {
            card.classList.add("radioMissing");
        })

    }
})

// Enlever les alertes quand pas de selection
cards.forEach(card => {
    card.addEventListener("click", () => {
        card.classList.remove("radioMissing");
        radioMissingText.style.visibility = "hidden";
    });
})

