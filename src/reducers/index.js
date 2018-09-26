import C from '../constants'

export const song = (state = {}, action) => {
    switch (action.type) {
        case C.ADD_SONG:
            return {
                id: action.id,
                song: action.song,
                rating: 0
            }
        case C.RATE_SONG:
            return (state.id !== action.id) ?
                state :
                {
                    ...state,
                    rating: action.rating
                }
        default :
            return state
    }
}

export const songs = (state = [], action) => {
    switch (action.type) {
        case C.ADD_SONG :
            return [
                ...state,
                song({}, action)
            ]
        case C.RATE_SONG :
            return state.map(
                c => song(c, action)
            )
        case C.REMOVE_SONG :
            return state.filter(
                c => c.id !== action.id
            )
        default:
            return state
    }
}