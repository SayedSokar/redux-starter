import store from './store'
import * as actionsFn from './actions'


//store.subscribe is to log every actions dispatched, unsubscribe function if called will do unsubscribe (so we can save some memoeries)
const unsubscribe = store.subscribe(() => {
    console.log("Store Changed", store.getState())

    }
)
store.dispatch(actionsFn.bugAdded("Bug1"))
store.dispatch(actionsFn.bugAdded("Bug2"))
store.dispatch(actionsFn.bugAdded("Bug3"))
store.dispatch(actionsFn.bugResolved(1))

unsubscribe() // when you change the UI page, u should unsubscribe to save memory space.

store.dispatch(actionsFn.bugRemoved(2))

console.log(store.getState())