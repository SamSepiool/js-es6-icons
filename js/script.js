// Milestone 1
// Partendo dalla seguente struttura dati , mostriamo in pagina tutte le icone disponibili come da layout.
const print = (arr, field) => {   
    // pulisco il "campo"
    field.innerHTML = '';

    // stampo tiles nell'html
    arr.forEach((element) => {

                const keys = {name, family, prefix, color} = element;
                field.innerHTML += 
                `<div class="tile">
                    <i class="${family} ${prefix}${name}" style="color: ${color}"></i>
                    <h3>${name}</h3>
                </div>`;
})
}



// variabili principali
const icons = [
{
    name: 'apple-alt',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
},
{
    name: 'ice-cream',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
},
{
    name: 'fish',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
},
{
    name: 'lemon',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
},
{
    name: 'hamburger',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
},
{
    name: 'pizza-slice',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
},
{
    name: 'beer',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
},
{
    name: 'glass-whiskey',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
},
{
    name: 'wine-bottle',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
},
{
    name: 'cocktail',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
},
{
    name: 'coffee',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
},
{
    name: 'glass-martini',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
},
{
    name: 'dragon',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
},
{
    name: 'kiwi-bird',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
},
{
    name: 'frog',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
},
{
    name: 'hippo',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
},
{
    name: 'otter',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
},
{
    name: 'horse',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
},
];
const categoryColor = {
    food: 'orange',
    beverage: 'lightblue',
    animal: 'brown'
};

// CONTAINER ICONE  
const pianoTiles = document.getElementById('piano_icons');


// PROGRAMMA

// Milestone 2
// Coloriamo le icone per tipo


const iconsColored = icons.map( 
    (element) =>{
        // aggiungo proprietà colore ad ogni oggetto, scegliendone il valore in base alla categoria dell'elemento
        element.color = categoryColor[element.category];
        return element;

});

print(iconsColored, pianoTiles);


// Milestone 3
// Creiamo una select con i tipi di icone e usiamola per filtrare le icone

const categories = [];

// estraggo categorie icone
icons.forEach(
    (element) => {
        // le aggiungo all'array categories una volta sola
        if(!categories.includes(element.category)){
            categories.push(element.category);
        }
    }
);


// SELECT CATEGORIE ICONE
const selectCategories = document.getElementById('iconType');

// genero tante opzioni quante sono le categorie
categories.forEach(
    (element) => {
        selectCategories.innerHTML += `<option value="${element}">${element}</option>`
    }
);



// EVENTO SELECT
selectCategories.addEventListener('change',

    function(){
        // filtro le icone in base alla categoria scelta (selectCategories)
        const filtered = iconsColored.filter((element) => {
            if (element.category == selectCategories.value || selectCategories.value == "") {
                return true;
            }
            return false;
        });
        // stampo icone filtrate
        print(filtered, pianoTiles);
    }
);










