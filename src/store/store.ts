import {combineReducers, configureStore} from '@reduxjs/toolkit'
import thunkMiddleware from 'redux-thunk'
import {weatherReducer} from "./weatherReducer";

export const rootReducer = combineReducers({
    weather: weatherReducer
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunkMiddleware)
})

// @ts-ignore
window.store = store