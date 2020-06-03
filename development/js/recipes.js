/*---------- listowanie przepisów recipes.html ------------*/
/*

let str = JSON.stringify(Recipes)
localStorage.setItem("recipes", str)
tak to trzeba

taką tabelke wstrzyknąć trzeba,czyli tworzycie tr, a w srodku TRa tworzycie 4 td
poprzez document.createElement('td')
i teraz kazdy TD jako inna zmienna
i do td.textContent = to co pobierzecie z local storage
a z local storage pobieracie tak:

let Recipes = JSON.parse(localStorage.getItem("recipes"))

i trzeba przeiterowac po kazdym elemencie Recipes

Recipes to tabela obiektów
lapiecie np. for of'em kazdy z elementów
i odwolujecie sie el.name

el.desc
a to przyrównać trzeba do innerText odpowiedniego TD'ka
stworzycie TR'a który bedzie miał 4 x TD, a kazdy z tych TD ma miec innerText odpowiedni
kazdego TD wstawiacie do TR'a oczywiscie poprzez TR.append(td#1, td#2... )
i na koniec calego TR'a wstrzyknąć do tablicy tablica.append(TR)
całość zróbcie jako wyrazenie funkcyjne o jakiejś tam nazwie
zeby to nie była funkcja anonimowa

 */
console.log("---Listowanie przepisów----");
//pobranie tabelki na przepisy do zmiennej
const recipesTable = document.querySelector("#recipes-table");

//pobranie obiektów przepisów z localstorage
let recipesFromStorage = JSON.parse(localStorage.getItem("recipes"));


for (const el of recipesFromStorage) {

    const newTr = document.createElement("tr");
    newTr.innerHTML = `<td>${el.id}</td>
                       <td>${el.name}</td>
                       <td>${el.desc}</td>
                       <td class="app-recipes-table-actions">
                            <a href="#edit-recipe" class="app-recipes-btn edit" id="edit-recipe-btn${el.id}">
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="edit" class="svg-inline--fa fa-edit fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z"></path></svg>
                            </a>
                            <a href="#edit-recipe" class="app-recipes-btn remove" id="remove-recipe-btn${el.id}">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 77.5375" x="0px" y="0px"><g data-name="Layer 2"><g data-name="Layer 1"><path d="M17.66,47.12A2.15,2.15,0,0,0,19.81,45V27.73a2.15,2.15,0,1,0-4.3,0V45A2.15,2.15,0,0,0,17.66,47.12Z"/><path d="M28,47.12A2.15,2.15,0,0,0,30.15,45V27.73a2.15,2.15,0,1,0-4.3,0V45A2.15,2.15,0,0,0,28,47.12Z"/><path d="M38.34,47.12A2.15,2.15,0,0,0,40.49,45V27.73a2.15,2.15,0,1,0-4.3,0V45A2.15,2.15,0,0,0,38.34,47.12Z"/><path d="M53.85,10.41H40.09L38.32,4.48a6.32,6.32,0,0,0-6-4.48H23.69a6.32,6.32,0,0,0-6,4.48l-1.77,5.93H2.15a2.15,2.15,0,0,0,0,4.3H4.71V56.1A5.94,5.94,0,0,0,10.64,62H45.43a5.94,5.94,0,0,0,5.93-5.93V14.64h2.49A2.15,2.15,0,0,0,56,12.49,2.09,2.09,0,0,0,53.85,10.41Zm-32-4.7A2,2,0,0,1,23.69,4.3h8.69a1.92,1.92,0,0,1,1.87,1.42l1.38,4.69H20.36ZM47.06,56.54h-.15a1.67,1.67,0,0,1-1.54,1.12H10.64A1.67,1.67,0,0,1,9,56V14.64H47.06Z"/></g></g></svg>
                            </a>
                       </td>`;

    recipesTable.appendChild(newTr);


    console.log(el.desc);
    console.log(el.id);
    console.log(el.id + 1);
    console.log(el.ingredients.toString());
    console.log(el.instructions.toString());
    console.log(el.name);
}
console.log("---------------------------");

const checkName = () => {
    const name = localStorage.getItem('name')
    const content = document.querySelector(".app-content-with-name")
    if (name) {
        document.querySelector(".user-name").textContent = name
        // document.querySelector(".app-welcome").style.display = "none"
        content.style.display = ''
    } else {
        // document.querySelector(".app-welcome").style.display = ""
        content.style.display = 'none'
    }
}
checkName()