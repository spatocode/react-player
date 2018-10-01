import React from 'react'
import '../stylesheets/CurrentPlayer.scss'

const CurrentPlayer = () =>
    <div className="current-player">
        <div className="timer">
            <div></div>
            <span aria-label="timer">00:00</span>
        </div>
        <div className="controls">
            <i className="material-icons" title="Repeat">repeat</i>
            <i className="fa fa-square" title="Stop"></i>
            <i className="fa fa-backward" title="Backward"></i>
            <i className="material-icons" title="Play">play_circle_filled</i>
            <i className="fa fa-forward" title="Forward"></i>
            <i className="material-icons" title="Shuffle">shuffle</i>
        </div>
    </div>

export default CurrentPlayer