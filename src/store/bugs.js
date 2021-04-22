
import { createSelector, createSlice } from '@reduxjs/toolkit'

// createSelector Mosh in the vedio mentioned that it need package reselector, but actualy I found the same function in redux-toolkit


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


// --------------------------Selector  functions --------------//

export const getUnresolvedBugs = state =>
    state.entities.bugs.filter(bug => !bug.resolved)


// ---------------------------------------reducer function --------------//
//------ note that the reducer should be the default export here in ths file---//
//----- Note: createReducer function from redux-toolkit is using immer under the hood, so u can wirte imutated code as normal.
//-- no need to the default state like below

//----- selector functions by special package createSelector----
export const getUnresolvedBugs_withReselector = createSelector(
    state => state.entities.bugs,
    bugs => bugs.filter(bug => !bug.resolved)
)




    


