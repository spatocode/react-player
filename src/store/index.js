import { createStore, combineReducers, applyMiddleware } from 'redux'
import { songs } from '../reducers'

export const store = (createStore(combineReducers({
    songs
})))

console.log( store.getState())