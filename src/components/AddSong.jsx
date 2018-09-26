import React from 'react'

const AddSong = ({onNewSong}) => {
    let music;
    const addSong = (e) => {
        onNewSong(e.currentTarget.files, e.currentTarget.files[0].name)
    }

    return(
        <div>
            <i className="fa fa-plus" title="Add song">
                <input onChange={addSong} style={{display: "block"}} type="file" 
                        multiple accept="audio/mp3" ref={input => music = input}/>
            </i>
        </div>
    )
}

export default AddSong