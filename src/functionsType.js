import {compose, pipe } from 'lodash/fp'
function Hello() {

    return "Sayed Ramadan"
}

function logIt(otherfn) {
    return (
        console.log(otherfn())
    )
}

logIt(Hello)

function sayHello() {
    return function () {
        return "Hello Sayed"
    }
}
let fn = sayHello()
console.log(fn())

//higher oder functions
//map
let numbers = [1, 2, 3, 4, 5]
const output = numbers.map(number => number * 2)
console.log("map is higher order function as it takes a function as argment",output)
//setTimeout
setTimeout(()=>{console.log("setTimeout function is takeing function as an agrement")},7000)


//Functions composion:

let input = "     Sayed Ramadan       Moahemd Ismail     "
let output2 = console.log(`<div>${input}</div>`)

let trim = str => str.trim()
let lower = str => str.toLowerCase()
let wrapindiv = str => `<div>${str}</div>`

//composing 3 functions
const result = wrapindiv(lower(trim(input)))
console.log(result)
//---------------------------
//lodash utility library
const transform = compose(wrapindiv, lower, trim)
transform(input)


const transformpipe = pipe(trim, lower, wrapindiv)

console.log(transformpipe("pipe is just to read the functions from the left to right in order of execution"))


//Currying ???
// Normal adding function, 2 argements required
const add1 = (a, b) => a + b
console.log(add1(5, 2))

//rst1 fn is returning 2nd fn, calling this fn is different
const add2 = a => b => a + b
const multy = c => c * 2
console.log(add2(5)(5)) // this kind of the function can be called like that
const output3 = pipe(add2(5), multy) // calling add2(5) and geving it 1st argment only, because the retrun of the add2 is a function  b => a + b and pipe is accepting only functions
console.log(output3(5)) // then now when you call the pipe you have ti give the secod argment

