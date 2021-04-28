import {configureStore} from '@reduxjs/toolkit'
import reducer from './reducer'
import logger from './middleware/logger'
import api from './middleware/api'


//---------------------- Create the store---------------------------------//
// note that the configureStore is automatically setup the store to talke to redux devtools, so no need to mention devtools as a second argment of the store below.
 

export default function () {
    return configureStore({
        reducer, // it can be writen like (reducer: reducer), both are the same name, so we can just put reducer
        middleware: [
            logger({ destination: "console" }),
            api
        ] // this properity is calling the Middleware logger.
        
    })
 }