
import { createAction, createReducer } from '@reduxjs/toolkit'

// --------------------------actions Creator functions --------------//


export const bugAdded = createAction ("bugAdded")
export const bugRemoved = createAction("bugRemoved")
export const bugResolved = createAction("bugResolved")



// ---------------------------------------reducer function --------------//
//------ note that the reducer should be the default export here in ths file---//
//----- Note: createReducer function from redux-toolkit is using immer under the hood, so u can wirte imutated code as normal.
//-- no need to the default state like below

export default createReducer([], {

    [bugAdded.type]: (bugs, action) => {
        bugs.push({
                id: ++lastId,
                description: action.payload.description,
                resolved: false
            })
    },
    [bugRemoved.type]: (bugs, action) => {
         bugs.filter(bug => bug.id !== action.payload.id)
    },
    [bugResolved.type]: (bugs, action) => {
        // state.map(bug => bug.id == action.payload.id ? { ...bug, resolved: true } : bug)
        const index = bugs.findIndex(bug => action.payload.id === bug.id)
        bugs[index].resolved = true
    }
})



let lastId = 0

    


