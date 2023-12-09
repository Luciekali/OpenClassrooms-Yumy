/////////////////////////////////// BOUTON CONTROLLER

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



