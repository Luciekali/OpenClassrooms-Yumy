const filtersBtn = document.querySelectorAll(".menu__wrapper--filterbar button");
const menuList = document.querySelectorAll(".menu__wrapper--choice ul");
const filtersBtnArr = Array.from(filtersBtn);

filtersBtn.forEach(button => {
    button.addEventListener("click", (e) => {
        filtersBtnArr[0].name = ""
        {
            let target = filtersBtnArr.indexOf(e.currentTarget)
            console.log("here")
            for (let i = 0; i < menuList.length; i++)

                menuList[i].classList.add("invisible"); //// Au click, tout devient invisible
            menuList[0].classList.remove("menuVisible"); /// entree devient invisible


            menuList[target].classList.replace("invisible", "menuVisible"); /// pour chaque target on remplace invisible par visible
        }
    })
})

