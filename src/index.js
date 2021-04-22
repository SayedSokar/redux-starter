import configStore from './store/configStore'
// import {applyMiddleware } from 'redux'
import { bugAdded, bugResolved, bugRemoved, getUnresolvedBugs, getUnresolvedBugs_withReselector } from './store/bugs'
import { projectAdded } from './store/projects'

//----------------------calling the store-------------

const store = configStore() /// calling store, there will passing the reducer and the Middleware.

//-----------------------------------------------

//store.subscribe is to log every actions dispatched, unsubscribe function if called will do unsubscribe (so we can save some memoeries)
const unsubscribe = store.subscribe(() => {
    console.log("Store Changed", store.getState())
    }
)
//-----------------------------------------

//------ store dispatching.-----
store.dispatch(projectAdded({name: "Project 1"}))
store.dispatch(bugAdded({description: "Bug1"}))
store.dispatch(bugAdded({description: "Bug2"}))
store.dispatch(bugAdded({description: "Bug3"}))
store.dispatch(bugResolved({id:1}))
unsubscribe() // when you change the UI page, u should unsubscribe to save memory space.
store.dispatch(bugRemoved({id:2}))



//---- selectors configurations-----
const X = getUnresolvedBugs(store.getState())
const Y = getUnresolvedBugs(store.getState())
console.log(X === Y) // that mean every time we call filter method we get new array, which is taking time and space in the memory
// so we need to use reselector package to avoid that issue and use the same result of filter if the state does not changed.
const E = getUnresolvedBugs_withReselector(store.getState())
const F = getUnresolvedBugs_withReselector(store.getState())
console.log(E === F) // now it is true
//---- end of selector configuration-------
