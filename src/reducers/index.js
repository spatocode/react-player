import { combineReducers } from 'redux'
import { songs } from './songs'
import { playState } from './playState'

export const reducers = combineReducers({
    playState, songs
})