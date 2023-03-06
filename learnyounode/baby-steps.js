let sliced = process.argv.slice(2)
let total = 0
for (let i = 0; i <sliced.length; i++) {
  total += +sliced[i]
}
console.log(total)