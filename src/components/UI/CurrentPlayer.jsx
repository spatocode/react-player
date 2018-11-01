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
        this.timerBar = React.createRef()
        this.timerBarWrapper = React.createRef()
    }

    playAudio = (e) => {
        const { name } = this.props;
        if(name && this.audioPlayer.current.paused){
            if(this.intervalRwd || this.intervalFwd){
                clearInterval(this.intervalRwd)
                clearInterval(this.intervalFwd)
            }
            window.document.title = name.replace('.mp3',' | React Player')
            this.audioPlayer.current.play()
            e.currentTarget.innerHTML = "pause_circle_filled"
        }
        else{
            if(this.intervalRwd || this.intervalFwd){
                clearInterval(this.intervalRwd)
                clearInterval(this.intervalFwd)
            }
            this.audioPlayer.current.pause()
            e.currentTarget.innerHTML = "play_circle_filled"
        }
    }

    stopAudio = () => {
        this.audioPlayer.current.pause()
        this.audioPlayer.current.currentTime = 0;
        clearInterval(this.intervalRwd);
        clearInterval(this.intervalFwd);
        window.document.title = "React Player"
    }

    timeUpdate = () => {
        var hours = Math.floor(this.audioPlayer.current.currentTime / 3600);
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
        var barLength = this.timerBarWrapper.current.clientWidth * (this.audioPlayer.current.currentTime/this.audioPlayer.current.duration);
        
        this.timer.current.innerHTML = audioTime
        this.timerBar.current.style.width = barLength + 'px'
    }

    audioForward = () => {
        clearInterval(this.intervalRwd)
        this.intervalFwd = setInterval(
            () => this.windForward(),
            200
        )
    }

    audioBackward = () => {
        clearInterval(this.intervalFwd)
        this.intervalRwd = setInterval(
            () => this.windBackward(),
            200
        )
    }

    windForward = () => {
        if(this.audioPlayer.current.currentTime >= this.audioPlayer.current.duration - 3) {
            clearInterval(this.intervalFwd);
            this.stopAudio();
        }
        else{
            this.audioPlayer.current.currentTime += 3
        }
    }

    windBackward = () => {
        if(this.audioPlayer.current.currentTime <= 3){
            clearInterval(this.intervalRwd)
            this.stopAudio()
        }
        else{
            this.audioPlayer.current.currentTime -= 3
        }
    }

    render(){
        const { name, src } = this.props
        let url = (src) ? URL.createObjectURL(src[0]) : null;
        return(
            <div className="current-player">
                <audio src={url} ref={this.audioPlayer} onTimeUpdate={this.timeUpdate}></audio>
                <div className="timer">
                    <p>{name}</p>
                    <div ref={this.timerBarWrapper} className="time-lenght-wrapper">
                        <div ref={this.timerBar} className="time-lenght" style={{width: "0"}}></div>
                    </div>
                    <span aria-label="timer" ref={this.timer}>00:00</span>
                </div>
                <Controls ref={this.playButton} play={this.playAudio} stop={this.stopAudio}
                    fwd={this.audioForward} rwd={this.audioBackward} />
            </div>
        )
    }
}

export default CurrentPlayer