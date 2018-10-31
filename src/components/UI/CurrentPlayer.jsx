import React, { Component } from 'react'
import Controls from './Controls'
import '../../stylesheets/CurrentPlayer.scss'

class CurrentPlayer extends Component {
    constructor(props){
        super(props)
        this.state = {
            time: ""
        }
        this.audioPlayer = React.createRef()
        this.playButton = React.createRef()
        this.stopButton = React.createRef()
        this.timer = React.createRef()
    }

    play = (e) => {
        const { name } = this.props;
        if(name && this.audioPlayer.current.paused){
            window.document.title = name.replace('.mp3',' | React Player')
            this.audioPlayer.current.play()
            e.currentTarget.innerHTML = "pause_circle_filled"
        }
        else{
            this.audioPlayer.current.pause()
            e.currentTarget.innerHTML = "play_circle_filled"
        }
    }

    stop = () => {
        this.audioPlayer.current.pause()
    }

    timeUpdate = () => {
        var hours = Math.floor(this.audioPlayer.current.currentTime / 120);
        var minutes = Math.floor(this.audioPlayer.current.currentTime / 60);
        var seconds = Math.floor(this.audioPlayer.current.currentTime - minutes * 60);
        var hourValue;
        var minuteValue;
        var secondValue;

        if(hours < 10){
            hourValue = '0' + hours
        }
        else{
            hourValue = hours
        }

        if(minutes < 10){
        minuteValue = '0' + minutes
        }
        else{
            minuteValue = minutes
        }

        if(seconds < 10){
            secondValue = '0' + seconds
        }
        else{
            secondValue = seconds
        }

        var audioTime = hourValue + ':' + minuteValue + ':' + secondValue
        this.timer.current.innerHTML = audioTime
    }

    render(){
        const { name, src } = this.props
        let url = (src) ? URL.createObjectURL(src[0]) : null;
        return(
            <div className="current-player">
                <audio src={url} ref={this.audioPlayer} onTimeUpdate={this.timeUpdate}></audio>
                <div className="timer">
                    <p>{name}</p>
                    <div></div>
                    <span aria-label="timer" ref={this.timer}>00:00</span>
                </div>
                <Controls ref={this.playButton} play={this.play} />
            </div>
        )
    }
}

export default CurrentPlayer