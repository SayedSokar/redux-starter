// how to change the object properity without changing the orignal object
const person = { name: "Sayed" } // orginal Obj
console.log(person)

let updatedName = Object.assign({}, person, { name: "Ramadan", Age: 43 }) // get all of person obj and just change the properity of name
console.log(updatedName)

let updatedName2 = { ...updatedName, name: "Mohamed" } // other way to do same action above
console.log(updatedName2)

// neasted Objects can be affected by these updated ways above, take care !!!

const persondetail = {
    name: "Sayed Ramadan",
    Address: {
        cuntry: "Egypt",
        city: "Cairo",
        Area: "Baron"
    },
    Age: 43
}
console.log("persondetail  =  ", persondetail)

// issue of copy neasted object
// const Upersondetail = { ...persondetail }
// Upersondetail.Address.city = "Tunis" // even I mentioned the new object (Upersondetail) here, but,  this will change the city in both objects (Upersondetail, persondetail)
// console.log("Upersondetail  =  ", Upersondetail)

// to solve this issue, need a deep copy like below:
const Upersondetail = {
    ...persondetail,
    Address: {
        ...persondetail.Address,
        city: "Tunis"
    }
}
console.log("Upersondetail  =  ", Upersondetail)


//----------------------------------------------------------
//Dealing with Array 
//adding
const nber = [1, 2, 3, 4, 5, 6]
const addedBefor = [4, ...nber]
const addedAfter = [...nber, 4]
const indexStart = nber.indexOf(4)
const indexEnd = nber.indexOf(6)
const addedmid = [...nber.slice(indexStart, indexEnd)]
const sliceM = nber.slice(0,2)
console.log(addedBefor, '\n', addedAfter, '\n', addedmid, '\n', sliceM)

//Removing
const remove = nber.filter(n => n !== 2)
console.log(remove)

//updating
const updatenbr2 = nber.map(n => n == 2 ? 20 : n)
console.log(nber, '\n',updatenbr2)