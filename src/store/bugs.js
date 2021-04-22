
import { createSlice } from '@reduxjs/toolkit'


let lastId = 0

//-- create Slice function is creating reducer and the action in the same function.
const slice = createSlice({
    name: 'bugs',
    initialState: [],
    reducers: {
        bugAdded: (bugs, action) => {
            bugs.push({
                id: ++lastId,
                description: action.payload.description,
                resolved: false
        })},
        bugRemoved: (bugs, action) => {
            return bugs.filter(bug => bug.id !== action.payload.id) // filter method should be used with return
        },
        bugResolved: (bugs, action) => {
            const index = bugs.findIndex(bug => action.payload.id === bug.id)
            bugs[index].resolved = true
        },
    }

})

//exporting the reducer and actions 

export default slice.reducer
export const { bugAdded, bugRemoved, bugResolved} = slice.actions


// --------------------------actions Creator functions --------------//



// ---------------------------------------reducer function --------------//
//------ note that the reducer should be the default export here in ths file---//
//----- Note: createReducer function from redux-toolkit is using immer under the hood, so u can wirte imutated code as normal.
//-- no need to the default state like below







    


