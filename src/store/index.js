import { createStore, combineReducers } from 'redux'
import { songs } from '../reducers'

export const store = (
    createStore(
        combineReducers({ songs }),
        (localStorage['redux-store']) ?
            JSON.parse(localStorage['redux-store']) :
            {}
    ))

store.subscribe(()=> {
    localStorage['redux-store'] = JSON.stringify(store.getState())
})