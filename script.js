const filtersBtn = document.querySelectorAll(".menu__wrapper--filterbar button");
const menuList = document.querySelectorAll(".menu__wrapper--choice ul");
const filtersBtnArr = Array.from(filtersBtn);

///// Filtrer l'affichage des repas
filtersBtn.forEach(button => {
    button.addEventListener("click", (e) => {
        {
            for (let i = 0; i < menuList.length; i++)  //// Au click, tout devient invisible
                menuList[i].classList.add("invisible");
        }

        let target = filtersBtnArr.indexOf(e.currentTarget)
        menuList[target].classList.remove("invisible") /// Pour la target, on enlève la classe invisible
    }

    )
}
)














//const keys = Object.keys(test)
//const values = Object.values(test)
//const entries = Object.entries(test)