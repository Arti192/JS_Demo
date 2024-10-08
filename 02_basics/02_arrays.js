const marvel_heros =["thor", "Iroman", "Spiderman"]
const dc_heros = ["superman", "flash", "Batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros)
// console.log(marvel_heros[3][1])

// const all_heros = marvel_heros.concat(dc_heros)
// console.log(all_heros)

// Spread Operator

const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros)

const another_arrs = [1,2,3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_arras = another_arrs.flat(Infinity)

console.log(real_arras)

console.log(Array.isArray("Alina"))
console.log(Array.from("Alina"))
console.log(Array.from({name : "Alina"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))
