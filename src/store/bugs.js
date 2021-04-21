const BUG_ADDED = "bugAdded"
const BUG_REMOVED = "bugRemoved"
const BUG_RESOLVED = "bugResolved"






// ---------------------------------------reducer function --------------//
//------ note that the reducer should be the default export here in ths file---//

let lastId = 0

export default function reducer(state = [], action) {
    switch (action.type) {
        case BUG_ADDED:
             return [
            ...state,
            {
                id: ++lastId,
                description: action.payload.description,
                resolved: false
            }
            ]
        case BUG_REMOVED:
            return state.filter(bug => bug.id !== action.payload.id)
        
        case BUG_RESOLVED:
            return state.map(bug => bug.id == action.payload.id ? {...bug, resolved: true} : bug)
            
        default:
            return state
    }
}
    


// --------------------------actions Creator functions --------------//


export const bugAdded= description => ({
    type: BUG_ADDED,
    payload: {
        description: description
    }
})

export const  bugRemoved = id => ({
        type: BUG_REMOVED,
            payload: {
            id: id
        }
})

export const bugResolved = id => ({
    type: BUG_RESOLVED,
    payload: {
        id // this code orginaly should be like that id: id,  but this is short if the name of the properity and the variable is same.
        
    }
})
