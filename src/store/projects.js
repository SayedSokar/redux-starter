
import { createSlice } from '@reduxjs/toolkit'


let lastId = 0

//-- create Slice function is creating reducer and the action in the same function.
const slice = createSlice({
    name: 'projects',
    initialState: [],

    reducers: { // action hendller
        projectAdded: (project, action) => {
            project.push({
                id: ++lastId,
                name: action.payload.name
               
        })},
        
    }

})

//exporting the reducer and actions 

export default slice.reducer
export const { projectAdded } = slice.actions


// --------------------------actions Creator functions --------------//



// ---------------------------------------reducer function --------------//
//------ note that the reducer should be the default export here in ths file---//
//----- Note: createReducer function from redux-toolkit is using immer under the hood, so u can wirte imutated code as normal.
//-- no need to the default state like below







    


