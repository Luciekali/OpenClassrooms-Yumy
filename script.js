const filtersBtn = document.querySelectorAll(".menu__wrapper--filterbar button");
const menuList = document.querySelectorAll(".menu__wrapper--choice ul");
const filtersBtnArr = Array.from(filtersBtn);


///// Filtrer l'affichage des repas
filtersBtn.forEach(button => {
    button.addEventListener("click", (e) => {
        filtersBtnArr[0].name = ""
        {
            let target = filtersBtnArr.indexOf(e.currentTarget)
            for (let i = 0; i < menuList.length; i++)

                menuList[i].classList.add("invisible"); //// Au click, tout devient invisible
            menuList[0].classList.remove("menuVisible"); /// entree devient invisible


            menuList[target].classList.replace("invisible", "menuVisible"); /// pour chaque target on remplace invisible par visible
        }
    })
})
//////////////// SELECTION DU RESTAURANT
const form = document.forms.form
const radio = document.getElementsByName("storeRadio")
const cards = document.querySelectorAll(".store__restaurants-items")
const cardsblocs = document.querySelectorAll(".store__restaurant-items li")
const radioMissingText = document.querySelector(".radioMissingContent")



// quand pas de selection
form.addEventListener("submit", (e) => {
    e.preventDefault();
    if ((radio[0].checked === false) && (radio[1].checked === false) && (radio[2].checked === false)) {

        radioMissingText.style.visibility = "visible"
        for (let i = 0; i < cards.length; i++) {
            const card = cards[i]
            card.classList.add("radioMissing");
        }
    }
})

// enlever les alertes quand pas de selection 
for (let i = 0; i < cards.length; i++)
    cards[i].addEventListener("click", (e) => {
        cards.forEach(li => {
            li.classList.remove("radioMissing");
        })
        radioMissingText.style.visibility = "hidden"
    })

/////////////////////////////////// BOUTON CONTROLLER 


//// 
///Ajouter quantité + afficher le bouton enlever 

const addBtn = document.querySelectorAll(".add")
const removeBtn = document.querySelectorAll(".remove")


// l'endroit ou on veut afficher
const quantityController = document.querySelectorAll(".menu__cartController p")
const recapController = document.querySelectorAll(".order__recap ul")


/// ce qu'on veut aller chercher
const orderTittle = document.querySelectorAll(".menu__choice > h3")
const orderPrice = document.querySelectorAll(".menu__content--description+p")
const orderName = document.querySelectorAll(".menu__content--description>p strong")

// ce qu'on veut afficher 
const quantityNumber = [0, 0, 0, 0, 0, 0, 0, 0, 0,]
const recapTittle = []
const recapName = []
const recapPrice = []


const addBtnArr = Array.from(addBtn)

let quantityMenu = quantityController.textContent = quantityNumber
//let tittle = recapController.textContent = recapTittle

for (let i = 0; i < addBtn.length; i++) {
    addBtn[i].addEventListener("click", () => {

        {
            quantityNumber[i]++;

            removeBtn[i].classList.replace("remove", "removeVisible");/// Rendre visible le bouton enlever
            quantityMenu[i] = quantityController[i].textContent = quantityNumber[i];

        }

    })
}


for (let i = 0; i < removeBtn.length; i++) {
    removeBtn[i].addEventListener("click", () => {
        quantityMenu[i]--;
        quantityMenu[i] = quantityController[i].textContent = quantityNumber[i];

        if (quantityNumber[i] <= 0) {
            removeBtn[i].classList.replace("removeVisible", "remove") //// si quantité 0 : enlever bouton 
        }
    })
}



