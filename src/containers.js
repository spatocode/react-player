import { connect } from 'react-redux'
import AddSongs from './components/AddSong'
import SongList from './components/SongList'
import App from './App'
import { addSong, removeSong, rateSong } from './actions'

export const NewSong = connect(
    null,
    dispatch => ({
        onNewSong: (song, name) => { dispatch(addSong(song, name)) }
    })
)(AddSongs)

export const Songs = connect(
    state =>
        ({
            songs: [...state.songs]
        }),
    dispatch =>
        ({
            onRemove(id) {
                dispatch(removeSong(id))
            },
            onRate(id, rating) {
                dispatch(rateSong(id, rating))
            }
        })
)(SongList)

export const ReactPlayer = connect(
    state =>
        ({
            songs: [...state.songs]
        }),
        null
)(App)