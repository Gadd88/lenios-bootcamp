const super_heros = [
    { hero: "Spider-Man", group: "Avengers" },
    { hero: "Iron-Man", group: "Avengers" },
    { hero: "Hulk", group: "Avengers" },
    { hero: "DeadPool", group: "None" },
    { hero: "Black Cat", group: "None" },
    { hero: "Wolverine", group: "X-Men" },
    { hero: "Professor X", group: "X-Men" },
    { hero: "Cable", group: "X-Men" },
];

const avengers = [
    { hero: "Spider-Man" },
    { hero: "Iron-Man" },
    { hero: "Hulk" },
    { hero: "Scarlet Witch" },
    { hero: "Firestar" },
    { hero: "Sunspot" },
];

const x_men = [
    { hero: "Scarlet Witch" },
    { hero: "Wolverine" },
    { hero: "Professor X" },
    { hero: "Cable" },
    { hero: "Sunspot" },
];

//1- Given an array of objects which contains character of Marvel, FILTER the characters that are members of X-Men
//2- Given two arrays of objects, one with members of Avengers and one with members of X-Men, find characters that are on both teams.


//********************************************************************************************* */
//Ejercicio 1
let xMen = super_heros.filter( item => item.group === 'X-Men')

console.log(xMen);


//********************************************************************************************* */

//Ejercicio 2
const duplicados = (arr1, arr2) =>{
    const heroesAvg = arr1.map((obj)=> obj.hero);
    const heroesX = arr2.map((obj)=> obj.hero);

    const heroesComun = heroesAvg.filter(hero => heroesX.includes(hero));
    return heroesComun;
};

const heroesDuplis = duplicados(avengers, x_men);
console.log(heroesDuplis)
//********************************************************************************************* */

const otraForma = avengers
    .map(avenger => avenger.hero)
    .filter(avenger => x_men.map(xmen => xmen.hero).includes(avenger));

console.log(otraForma)

const arrayHeroes = [
    {name: 'Iron Man', team: ['Avengers'], age: 40, p: {a:1}},
    {name: 'Captain America', team: ['Avengers'], age: 95},
    {name: 'Thor', team: ['Avengers'], age: 1000},
    {name: 'Hulk', team: ['Avengers'], age: 45},
    {name: 'Wolverine', team: ['X.Men', 'Avengers'], age: 150},
    {name: 'Cyclops', team: ['X-Men'], age: 35},
    {name: 'Storm', team: ['X-Men'], age: 40},
    {name: 'Jean Gray', team: ['X-Men'], age: 32},
    {name: 'Black Widow', team: ['Avengers'], age: 38},
    {name: 'Beast', team: ['X-Men'], age: 42},
    {name: 'Rogue', team: ['X-Men'], age: 29},
    {name: 'Scarlet Witch', team: ['Avengers', 'X-Men'], age: 33},
    {name: 'Iron Man', team: ['Avengers'], age: 50},
]

//Ordenar por edad
const newArray = arrayHeroes.sort((a,b) => b.age - a.age);
console.log(newArray)

//Filtrar por edad
const newEdad = arrayHeroes.filter(char => char.age>45)
console.log(newEdad)

//Filtrar por Equipo
const newTeam = arrayHeroes.filter(arrayHeroes.team == 'Avengers')
console.log(newTeam)



//Given an array of Marvel characters, create a function that sorts them by release date and then shows the list in HTML format.


const characters = [
    { name: "Iron Man", team: ["Avengers"], age: 40, p: { a: 1 }, releaseDate: "May 2, 2008" },
    { name: "Captain America", team: ["Avengers"], age: 95, releaseDate: "July 22, 2011" },
    { name: "Thor", team: ["Avengers"], age: 1000, releaseDate: "May 6, 2011" },
    { name: "Hulk", team: ["Avengers"], age: 45, releaseDate: "June 20, 2003" },
    { name: "Wolverine", team: ["X-Men", "Avengers"], age: 150, releaseDate: "July 14, 2000" },
    { name: "Cyclops", team: ["X-Men"], age: 35, releaseDate: "July 14, 2000" },
    { name: "Storm", team: ["X-Men"], age: 40, releaseDate: "July 14, 2000" },
    { name: "Jean Grey", team: ["X-Men"], age: 32, releaseDate: "July 14, 2000" },
    { name: "Black Widow", team: ["Avengers"], age: 38, releaseDate: "May 1, 2020" },
    { name: "Beast", team: ["X-Men"], age: 42, releaseDate: "July 14, 2000" },
    { name: "Rogue", team: ["X-Men"], age: 29, releaseDate: "July 14, 2000" },
    { name: "Scarlet Witch", team: ["Avengers", "X-Men"], age: 33, releaseDate: "May 1, 2015" },
    { name: "Iron Man", team: ["Avengers"], age: 50, releaseDate: "May 2, 2008" },
];

// characters.sort((a,b) => {
//     if (a.releaseDate < b.releaseDate){
//         return -1
//     } else if(a.releaseDate > b.releaseDate){
//         return 1
//     } else{
//         return 0
//     }
// })

const charsSorted = characters.sort((a,b) => {
    if(parseInt(a.releaseDate.slice(-4)) < parseInt(b.releaseDate.slice(-4))){
        return -1
    } else if(parseInt(a.releaseDate.slice(-4)) > parseInt(b.releaseDate.slice(-4))){
        return 1
    } else{
        return 0
    }
})

console.log(charsSorted)

//console.log(convertirFecha(characters[0].releaseDate))

function convertirFecha(string){
    let anio = parseInt(string.slice(-4))
    return anio
}

//console.log(characters[7].releaseDate.slice(-4))
