import { produce } from 'immer'
// how to use package immer to update objects immutability 
let book = { title: "Harry Potter" }

function publish(book) {
    return produce(
        book,
        draftbook => {
            draftbook.isPublished = true
        }
    )
    
}

let updated = publish(book)
console.log(book)
console.log(updated)