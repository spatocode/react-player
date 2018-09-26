import { v4 } from 'uuid'
import C from '../constants'

export const addSong = (song) =>
    ({
        type: C.ADD_SONG,
        song,
        id: v4()
    })

export const removeSong = id =>
    ({
        type: C.REMOVE_SONG,
        id
    })

export const rateColor = (id, rating) =>
    ({
        type: C.RATE_SONG,
        id,
        rating
    })