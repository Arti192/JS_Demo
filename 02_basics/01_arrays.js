// arrays

const myArr = [0,1,2,3,4,5]
const superHeroes = ["IronMan", "Caption America", "Thor", "Black widow"]

const arr1 = new Array(1, 2, 3, 4, 5)
// console.log(myArr[1])

// Arrays Method

// myArr.push(6)
// myArr.push(7)
// console.log(myArr)
// myArr.pop()
// console.log(myArr)

// myArr.unshift(0)
// console.log(myArr)
// myArr.shift()
// console.log(myArr)

// console.log(myArr.includes(8))
// console.log(myArr.indexOf(4))

// const newArr = myArr.join()
// console.log(myArr)
// console.log(newArr)
// console.log(typeof newArr)

//slice and splice

console.log("A", myArr)

const myn1 = myArr.slice(1, 3)
console.log(myn1)
console.log("B", myArr)

const myn2 = myArr.splice(1, 3)
console.log(myn2)
console.log("c", myArr)