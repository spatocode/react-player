import React from 'react'
import PropTypes from 'prop-types'
import Song from './Song'
import '../stylesheets/PlayerList.scss'

const  SongList = ({ songs=[], onRate=f=>f, onRemove=f=>f, getSong=f=>f }) =>
    <div className="song-list">
        {(songs.length === 0) ?
            <p className="no-song">No Songs added. (Add a song)</p> :
            songs.map(song =>
                <Song key={song.id}
                    {...song}
                    onRate={(rating) => onRate(song.id, rating)}
                    onRemove={() => onRemove(song.id)} />
            )
        }
    </div>

SongList.propTypes = {
    songs: PropTypes.array,
    onRate: PropTypes.func,
    onRemove: PropTypes.func
}

export default SongList