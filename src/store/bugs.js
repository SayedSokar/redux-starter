
import { createAction } from '@reduxjs/toolkit'

// --------------------------actions Creator functions --------------//


export const bugAdded= createAction ("bugAdded")
export const bugRemoved = createAction("bugRemoved")
export const bugResolved = createAction("bugResolved")



// ---------------------------------------reducer function --------------//
//------ note that the reducer should be the default export here in ths file---//

let lastId = 0

export default function reducer(state = [], action) {
    switch (action.type) {
        case bugAdded.type:
             return [
            ...state,
            {
                id: ++lastId,
                description: action.payload.description,
                resolved: false
            }
            ]
        case bugRemoved.type:
            return state.filter(bug => bug.id !== action.payload.id)
        
        case bugResolved.type:
            return state.map(bug => bug.id == action.payload.id ? {...bug, resolved: true} : bug)
            
        default:
            return state
    }
}
    


