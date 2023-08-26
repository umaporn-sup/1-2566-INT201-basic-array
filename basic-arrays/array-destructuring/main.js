// array destructuring
const [m] = [10, 20, 30, 40]
console.log(m)

const [, , n] = [8, 16, 24, 32]
console.log(n)

const [a, b] = [5, 10]
console.log(a)
console.log(b)

//Rest Operator Works in a Destructuring Assignment
const [x, y, ...z] = [5, 10, 15, 20, 25]
console.log(x)
console.log(y)
console.log(z) // [15,20,25]

//Rest Operator Work in a Function
function displayProfile(firstname, lastname, ...otherInfo) {
  return otherInfo
}

console.log(
  displayProfile('Umaporn', 'Supasitthimethee', 'KMUTT', 'Bangkok 10140')
)
