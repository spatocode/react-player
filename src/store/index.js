import { createStore, applyMiddleware } from 'redux'
import { reducers } from '../reducers'

const logger = store => next => action => {
    let result
    console.groupCollapsed('dispatching', action.type)
    console.log('prev state', store.getState())
    console.log('action', action)
    result = next(action)
    console.log('next state', store.getState())
    console.groupEnd()
}

const saver = store => next => action => {
    let result = next(action)
    localStorage['redux-store'] = JSON.stringify(store.getState())
    return result
}

const storeFactory = () =>
    applyMiddleware(logger, saver) (createStore) (
        reducers,
        (localStorage['redux-store']) ?
            JSON.parse(localStorage['redux-store']) :
            {}
    )

export default storeFactory