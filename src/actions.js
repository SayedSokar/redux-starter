import * as actions from './actionTypes'

export const bugAdded= description => ({
    type: actions.BUG_ADDED,
    payload: {
        description: description
    }
})

export const  bugRemoved = id => ({
        type: actions.BUG_REMOVED,
            payload: {
            id: id
        }
})

export const bugResolved = id => ({
    type: actions.BUG_RESOLVED,
    payload: {
        id // this code orginaly should be like that id: id,  but this is short if the name of the properity and the variable is same.
        
    }
})