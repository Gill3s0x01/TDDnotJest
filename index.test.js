const sum = require('.')

const expect = (result) => ({
  toBe: (expected) => {
    if (result === expected) {
      console.log('\x1b[32m', 'OK')
    } else {
      console.log('\x1b[31m', `Expected ${expected}, got ${result}`)
    }
  },
  notToBe: (expected) => {
    if (result !== expected) {
      console.log('\x1b[32m', 'OK')
    } else {
      console.log('\x1b[31m', `Expected ${expected}, got ${result}`)
    }
  },
})

const it = (description, cb) => {
  console.log(`\n${description}`)
  cb()
}

// // Bigger
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>
// it('should sum two values', () => {
//   const n1 = 10
//   const n2 = 40
//   const result = sum(n1, n2)
//   const expected = 60

//   expect(result).toBe(expected)
// })

// smaller
// >>>>>>>>>>>>>>>>>>>>>>>>>>>
it('should sum 10 with 20 values', () => {
  expect(sum(10, 20)).notToBe(60)
})

it('should sum 40 with 30 values', () => {
  expect(sum(40, 30)).notToBe(60)
  expect(sum(10, 20)).notToBe(60)
})

it('should sum two values', () => {
  expect(sum(10, 27)).toBe(37)
  expect(sum(10, 20)).notToBe(60)
  expect(sum(10, 20, 50)).toBe(80)
})

// Test default no library used
// >>>>>>>>>>>>>>>>>>>>>>>>>
// const n1 = 10
// const n2 = 20
// const result = sum(n1, n2)

// const expected = 30

// if (result === expected) {
//   console.log('\x1b[32m', 'Test passed!')
// } else {
//   console.log(
//     '\x1b[31m',
//     `Test failed! Expected ${expected}, but got ${result}`
//   )
// }
