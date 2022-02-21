// refactored for used quantites numbers variables
function sum() {
  return Object.values(arguments).reduce((accum, curr) => accum + curr)
}

// // initial function
// const sum = (n1, n2) => {
//   return n1 + n2
// }

module.exports = sum
