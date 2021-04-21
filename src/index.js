import configStore from './store/configStore'
import { bugAdded, bugResolved, bugRemoved } from './store/bugs'

const store = configStore()

//store.subscribe is to log every actions dispatched, unsubscribe function if called will do unsubscribe (so we can save some memoeries)
const unsubscribe = store.subscribe(() => {
    console.log("Store Changed", store.getState())

    }
)
store.dispatch(bugAdded({description: "Bug1"}))
store.dispatch(bugAdded({description: "Bug2"}))
store.dispatch(bugAdded({description: "Bug3"}))
store.dispatch(bugResolved({id:1}))

unsubscribe() // when you change the UI page, u should unsubscribe to save memory space.

store.dispatch(bugRemoved({id:2}))

console.log(store.getState())