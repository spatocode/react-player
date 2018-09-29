import React from 'react'
import PropTypes from 'prop-types'

const AddSong = ({onNewSong}) => {
    let music;
    const addSong = (e) => {
        onNewSong(e.currentTarget.files, e.currentTarget.files[0].name)
    }

    return(
        <div className="add-song">
            <input class="visually-hidden" id="song-selector" onChange={addSong} style={{display: "block"}} type="file" 
                    multiple accept="audio/mp3" ref={input => music = input}/>
            <label for="song-selector">+</label>
        </div>
    )
}

AddSong.propTypes = {
    onNewSong: PropTypes.func
}

export default AddSong