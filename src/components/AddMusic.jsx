import React from 'react'

const AddSong = ({onNewSong}) => {
    let music;
    const submit = () => {
        onNewSong(music.value)
    }

    return(
        <div>
            <i className="fa fa-plus" title="Add song">
                <input onInput={submit} style={{display: "block"}} type="file" multiple accept="audio/mp3" ref={input => music = input}/>
            </i>
        </div>
    )
}

export default AddSong