// console.log('Hello, World!')

const firstName = 'Joely'

// This doesn't work because we can't reassign constant variables.
// firstName = 'Smitty'

let age = 23

// console.log(`Hello, my name is ${firstName} and I am ${age} years old.`)

const isCool = false
const hasCats = true

let height;
let height2 = undefined

height = '5ft, 2in'

// console.log(height)

const num1 = 6
const num2 = 4.153
console.log('Original: ',num1 + num2)
console.log(Math.round(num1 + num2))

let x = 7 % 3
// console.log(x)

age = 25
let scottAge = 25

if (age > scottAge){
    console.log('I\'m older than Scott!')
} else if (age === scottAge) {
    console.log(`I'm the same age as Scott!`)
} else {
    console.log("I'm younger than Scott!")
}

if(age !== scottAge){
    console.log('I am not the same age as Scott!')
}