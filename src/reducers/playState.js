import C from '../actions/constants'

export const playState = (state = {}, action) => {
    switch(action.type){
        case C.PLAY_SONG:
            return Object.assign({}, state, {
                name: action.name,
                src: action.src
            })
        default :
            return state
    }
}