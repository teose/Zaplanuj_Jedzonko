{
    let recipes = JSON.parse(localStorage.getItem('recipes'))
    if (!recipes) {
        const newRecipes = JSON.stringify([])
        localStorage.setItem('recipes', newRecipes)
    }
    let plansEmer = JSON.parse(localStorage.getItem("plans"))
    if (!plansEmer) {
        const newPlans = JSON.stringify([])
        localStorage.setItem('plans', newPlans)
    }
}
document.addEventListener("DOMContentLoaded", function () {
    const checkName = () => {
        const name = localStorage.getItem('name')
        const content = document.querySelector(".app-content-with-name")
        if (name) {
            document.querySelector(".user-name").textContent = name
            document.querySelector(".app-welcome").style.display = "none"
            content.style.display = ''
        } else {
            document.querySelector(".app-welcome").style.display = ""
            content.style.display = 'none'
        }
    }
    checkName()

    {
        const input = document.querySelector(".app-welcome-name");
        const btn = document.querySelector(".app-welcome-submit");
        const div = document.querySelector(".app-welcome");
        const name = document.querySelector(".user-name");

        btn.addEventListener("click", function (e) {
            e.preventDefault();
            if (!input.value) {
                alert('Wpisz swoje imię!')
                // name.textContent = 

            } else {
                localStorage.setItem('name', input.value)
                name.textContent = localStorage.getItem('name')
                checkName()
            }
            // location.reload()
        })
    }

    {
        const btn = document.querySelectorAll(".app-menu-btn");

        for (const el of btn) {
            el.addEventListener("mouseover", function () {
                this.parentElement.lastElementChild.style.display = "block";
            });
            el.addEventListener("mouseout", function () {
                this.parentElement.lastElementChild.style.display = "none";
            })
        }
    }


    formRecipe.addEventListener('submit', saveToLocalStorage)


    const addInstrBtn = document.querySelector(".plus-btn-instructions")
    const addIngredBtn = document.querySelector(".plus-btn-ingredients")
    addInstrBtn.addEventListener('click', addInstruction)
    addIngredBtn.addEventListener('click', addIngredient)

    const formPlan = document.querySelector("form.form-plan")
    formPlan.addEventListener('submit', planSave)

    const spanNext = document.querySelector(".next.span-nav")
    const spanPrev = document.querySelector(".prev.span-nav")

    spanNext.addEventListener('click', nextWeek)
    spanPrev.addEventListener('click', prevWeek)

    weekSort()

});

const saveRecipeBtn = document.querySelector(".save-recipe-btn")
const formRecipe = document.querySelector(".form-recipe")
const nameRecipe = document.querySelector(".name-recipe")
const descriptionRecipe = document.querySelector(".description-recipe")
let Recipes = JSON.parse(localStorage.getItem("recipes"))


if (Recipes) {
    //jesli istnieje to parsowane i pobrane
    // console.log(Recipes);
} else {
    //nie istnieje to tworzone nowe i bedzie tu pushowane
    Recipes = []
}


function saveToLocalStorage(e) {
    const dish = new Object
    dish.instructions = []
    dish.ingredients = []
    const listInstr = [...document.querySelector(".instructions-list").children]
    const listIngr = [...document.querySelector(".ingredients-list").children]
    const form = document.querySelector(".form-recipe");

    for (let el of listInstr) {
        dish.instructions.push(el.innerText)
    }
    for (let el of listIngr) {
        dish.ingredients.push(el.innerText)
    }


    e.preventDefault()
    dish.id = Recipes.length + 1
    dish.name = nameRecipe.value
    dish.desc = descriptionRecipe.value
    Recipes.push(dish)
    //stringify i wstrzykiwanie do localstorage
    let str = JSON.stringify(Recipes)
    localStorage.setItem("recipes", str)
    recipesIntoSelect()
    form.reset()
    location.href = "app.html#welcome"
    recipesCounter()


}

function removeLi() {
    this.parentElement.remove();
}

function addInstruction() {
    const form = document.querySelector(".form-recipe-first");
    const textArea = document.querySelector(".recipe-textarea-second")
    const list = document.querySelector(".instructions-list")
    const li = document.createElement('li')
    const span = document.createElement('span')
    const btnDlt = document.createElement('button')
    const btnEdit = document.createElement('button')
    span.innerText = textArea.value

    btnDlt.classList.add('recipe-button--trash')
    btnDlt.addEventListener('click', removeLi)
    btnDlt.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
    viewBox="0 0 24 24">
    <path fill="none"
        d="M17.004 20L17.003 8h-1-8-1v12H17.004zM13.003 10h2v8h-2V10zM9.003 10h2v8h-2V10zM9.003 4H15.003V6H9.003z" />
    <path
        d="M5.003,20c0,1.103,0.897,2,2,2h10c1.103,0,2-0.897,2-2V8h2V6h-3h-1V4c0-1.103-0.897-2-2-2h-6c-1.103,0-2,0.897-2,2v2h-1h-3 v2h2V20z M9.003,4h6v2h-6V4z M8.003,8h8h1l0.001,12H7.003V8H8.003z" />
    <path d="M9.003 10H11.003V18H9.003zM13.003 10H15.003V18H13.003z" />
    </svg>`

    btnEdit.classList.add('recipe-button--edit')
    btnEdit.innerHTML = ` <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
    viewBox="0 0 24 24">
    <path
    d="M13.771 9.123L12.372 7.725 8.503 11.589 8.503 12.987 9.901 12.987z" />
    <path transform="rotate(45.001 14.264 7.232)"
    d="M13.275 6.478H15.253V7.987H13.275z" />
    <path
    d="M20,2H4C2.897,2,2,2.897,2,4v18l5.333-4H20c1.103,0,2-0.897,2-2V4C22,2.897,21.103,2,20,2z M20,16H6.667L4,18V4h16V16z" />
    </svg>`

    li.append(span, btnEdit, btnDlt)
    list.appendChild(li)

    form.reset()

}

function addIngredient() {
    const form = document.querySelector(".form-recipe-second");
    const textArea = document.querySelector(".recipe-textarea-third")
    const list = document.querySelector(".ingredients-list")
    const li = document.createElement('li')
    const span = document.createElement('span')
    const btnDlt = document.createElement('button')
    const btnEdit = document.createElement('button')
    span.innerText = textArea.value

    btnDlt.classList.add('instruction-btn--delete')
    btnDlt.addEventListener('click', removeLi)
    btnDlt.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
    viewBox="0 0 24 24">
    <path fill="none"
        d="M17.004 20L17.003 8h-1-8-1v12H17.004zM13.003 10h2v8h-2V10zM9.003 10h2v8h-2V10zM9.003 4H15.003V6H9.003z" />
    <path
        d="M5.003,20c0,1.103,0.897,2,2,2h10c1.103,0,2-0.897,2-2V8h2V6h-3h-1V4c0-1.103-0.897-2-2-2h-6c-1.103,0-2,0.897-2,2v2h-1h-3 v2h2V20z M9.003,4h6v2h-6V4z M8.003,8h8h1l0.001,12H7.003V8H8.003z" />
    <path d="M9.003 10H11.003V18H9.003zM13.003 10H15.003V18H13.003z" />
    </svg>`

    btnEdit.classList.add('instruction-btn--edit')
    btnEdit.innerHTML = ` <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
    viewBox="0 0 24 24">
    <path
    d="M13.771 9.123L12.372 7.725 8.503 11.589 8.503 12.987 9.901 12.987z" />
    <path transform="rotate(45.001 14.264 7.232)"
    d="M13.275 6.478H15.253V7.987H13.275z" />
    <path
    d="M20,2H4C2.897,2,2,2.897,2,4v18l5.333-4H20c1.103,0,2-0.897,2-2V4C22,2.897,21.103,2,20,2z M20,16H6.667L4,18V4h16V16z" />
    </svg>`

    li.append(span, btnEdit, btnDlt)
    list.appendChild(li)
    form.reset()
}

function recipesIntoSelect() {
    const selects = document.querySelectorAll(".select-form1")
    const recipes = JSON.parse(localStorage.getItem("recipes"))
    for (let sel of selects) {

        //zerowanie każdego selecta i dodanie jako pierwszej opcji 'wybierz potrawę'
        sel.innerHTML = `<option value="0" selected>wybierz potrawę</option>`
        let value = 0

        //dodawanie potraw do wyboru w selecie
        for (let el of recipes) {

            const option = document.createElement('option')
            option.setAttribute('value', ++value)
            option.innerText = el.name
            sel.append(option)

        }
    }


}

function planSave(e) {
    e.preventDefault()
    let plans = JSON.parse(localStorage.getItem("plans"))
    const plan = new Object
    const namePlane = document.querySelector(".text-input-plan")
    const descriptionPlan = document.querySelector(".plan-textarea-first")
    const weekNumber = document.querySelector(".plan-input")
    const form = document.querySelector(".form-plan");

    if (plans) {
        //jesli istnieje to parsowane i pobrane
    } else {
        //nie istnieje to tworzone nowe i bedzie tu pushowane
        plans = []
    }

    const days = document.querySelectorAll(".app-content-table1 tr.day")
    const weeklyMeals = []


    //tabela dla kazdego dnia
    let index = 0
    //tworzenie listy z 7 listami (dania z kazdego dnia tygodnia)
    for (let i = 0; i < days.length; i++) {
        weeklyMeals.push([])
    }
    //tworzenie elementu zawierajacego wybrane dania
    for (let day of days) {

        for (let td of [...day.querySelectorAll('td')]) {

            weeklyMeals[index].push(td.querySelector('select').selectedIndex)
        }
        index++

    }

    plan.weekNumber = weekNumber.value

    plan.name = namePlane.value
    plan.desciption = descriptionPlan.value
    plan.weeklyMeals = weeklyMeals

    plans.push(plan)

    let newPlans = JSON.stringify(plans)
    localStorage.setItem("plans", newPlans)
    form.reset()
    location.href = "app.html#welcome"
    weekSort()
}

let weekNum = 0

function loadPlan() {
    const plans = JSON.parse(localStorage.getItem("plans"))
    const spanNum = document.querySelector(".span-week-number")
    if (plans.length != 0) {
        spanNum.innerText = plans[weekNum].weekNumber
        const rows = [...document.querySelectorAll(".meal")]
        const recipes = JSON.parse(localStorage.getItem("recipes"))
        const noMeal = new Object
        noMeal.name = "Brak wyboru"
        recipes.unshift(noMeal)
        plans.forEach((plan) => {
            if (plan.weekNumber == spanNum.textContent) {
                rows.forEach((row, index) => {
                    // wchodze do kazdego rzedu po kolei
                    const day = [...row.querySelectorAll('td')]
                    day.forEach((meal, mealNum) => {
                        const mealNumber = plan.weeklyMeals[index][mealNum]
                        meal.textContent = recipes[mealNumber].name
                    })
                })
            }
        })
    } else {
        spanNum.innerText = 0
    }
}

function nextWeek() {
    weekNum++

    const plans = JSON.parse(localStorage.getItem("plans"))
    if (weekNum >= plans.length) {
        console.log('ziomuś za daleko')
        weekNum = plans.length - 1
    }
    weekSort()
    loadPlan()

}

function prevWeek() {
    weekNum--
    if (weekNum < 0) {
        weekNum = 0
    }
    loadPlan()
}

recipesIntoSelect();
loadPlan()

function weekSort() {
    const list = JSON.parse(localStorage.getItem("plans"));
    list.sort(function (a, b) {
        return a.weekNumber - b.weekNumber
    });
    const newList = JSON.stringify(list);
    localStorage.setItem("plans", newList);
}

function recipesCounter() {
    let recipes = JSON.parse(localStorage.getItem('recipes'))
    const span = document.querySelector(".app-cont-numberRecipe")

    if (!recipes) {
        recipes = 0
    }
    span.textContent = recipes.length
}
recipesCounter()