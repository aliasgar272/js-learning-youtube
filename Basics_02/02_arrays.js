const marvelHeroes = ['ironman', 'thor' , 'spiderman']
const dcHeroes = ['superman', 'batman', 'flash']


// marvelHeroes.push(dcHeroes) // pushes dc array as a single 4th element
// console.log(marvelHeroes);

const allHeroes = marvelHeroes.concat(dcHeroes)
console.log('Concatenated Array', allHeroes);

const sabHeroes = [...marvelHeroes, ...dcHeroes]    //spreading in an array

console.log('Spreading in an array', sabHeroes);


//Converting into an Array
console.log(Array.from("Aliasgar")); // String into an array

console.log(Array.from({name : Ali}));  //Interesting, make objects into arrays by keys or value


