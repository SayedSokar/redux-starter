
const logger = param => store => next => action => { // if needed to send param to the middleware, this is how (note: param)
    console.log("Logging", param)
    
    next(action) // this line to execute the action, if not mentioned there will not be action
}
export default logger