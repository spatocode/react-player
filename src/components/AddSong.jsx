import React from 'react'
import PropTypes from 'prop-types'

const AddSong = ({onNewSong}) => {
    let music;
    const addSong = () => {
        onNewSong(URL.createObjectURL(music.files[0]), music.files[0].name)
    }

    return(
        <div className="add-song">
            <input className="visually-hidden" id="song-selector" onChange={addSong} style={{display: "block"}} type="file" 
                    multiple accept="audio/mp3" ref={input => music = input}/>
            <label htmlFor="song-selector">+</label>
        </div>
    )
}

AddSong.propTypes = {
    onNewSong: PropTypes.func
}

export default AddSong