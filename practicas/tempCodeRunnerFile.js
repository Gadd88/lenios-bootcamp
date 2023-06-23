
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