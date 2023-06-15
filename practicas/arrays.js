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
