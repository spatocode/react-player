import React from 'react'
import '../stylesheets/CurrentPlayer.scss'

const CurrentPlayer = ({ name, src }) => {
    let url = (src) ? URL.createObjectURL(src[0]) : null
    let audioPlayer
    let timer

    const play = () => {
        (audioPlayer.paused) ?
        audioPlayer.play() :
        audioPlayer.pause();
        window.document.title = name.replace('.mp3',' | React Player')
    }

    const timeUpdate = (e) => {
        var hours = Math.floor(e.target.currentTime / 120);
        var minutes = Math.floor(e.target.currentTime / 60);
        var seconds = Math.floor(e.target.currentTime - minutes * 60);
        var hourValue;
        var minuteValue;
        var secondValue;

        if(hours < 10){
        hourValue = '0' + hours
        }else{
        hourValue = hours
        }

        if(minutes < 10){
        minuteValue = '0' + minutes
        }else{
        minuteValue = minutes
        }

        if(seconds < 10){
        secondValue = '0' + seconds
        }
        else{
        secondValue = seconds
        }

        var audioTime = hourValue + ':' + minuteValue + ':' + secondValue
        timer = audioTime
        console.log(timer)
    }

    setInterval(()=>console.log(timer), 1000)

    return(
        <div className="current-player">
            <audio src={url} ref={audio => audioPlayer = audio} onTimeUpdate={timeUpdate}></audio>
            <div className="timer">
                <p>{name}</p>
                <div></div>
                <span aria-label="timer">{timer}</span>
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