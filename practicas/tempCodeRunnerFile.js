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
// const newArray = arrayHeroes.sort((a,b) => b.age - a.age);
// console.log(newArray)

// //Filtrar por edad
// const newEdad = arrayHeroes.filter(char => char.age>45)
// console.log(newEdad)

//Filtrar por Equipo
const newTeam = arrayHeroes.includes(arrayHeroes.team == 'Avengers')
console.log(newTeam)