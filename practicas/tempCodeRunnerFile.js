const duplicados = (arr1, arr2) =>{
    const heroesAvg = arr1.map((obj)=> obj.hero);
    const heroesX = arr2.map((obj)=> obj.hero);

    const heroesComun = heroesAvg.filter(hero => heroesX.includes(hero));
    return heroesComun;
};

const heroesDuplis = duplicados(avengers, x_men);
console.log(heroesDuplis)
