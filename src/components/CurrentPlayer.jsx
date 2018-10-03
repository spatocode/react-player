import React from 'react'
import '../stylesheets/CurrentPlayer.scss'

const CurrentPlayer = ({songs}) => {
    let audioPlayer

    const play = () => {
        console.log(songs)
    }
    return(
        <div className="current-player">
            <audio ref={audio => audioPlayer = audio}></audio>
            <div className="timer">
                <p></p>
                <div></div>
                <span aria-label="timer">00:00</span>
            </div>
            <div className="controls">
                <i className="material-icons" title="Repeat">repeat</i>
                <i className="fa fa-square" title="Stop"></i>
                <i className="fa fa-backward" title="Backward"></i>
                <i className="material-icons" title="Play" onClick={play}>play_circle_filled</i>
                <i className="fa fa-forward" title="Forward"></i>
                <i className="material-icons" title="Shuffle">shuffle</i>
            </div>
        </div>
    )
}

export default CurrentPlayer