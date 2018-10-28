import React, { Component } from 'react'
import Play from './Play'
import Pause from './Pause'
import '../../stylesheets/CurrentPlayer.scss'

class CurrentPlayer extends Component {
    constructor(props){
        super(props)
        this.state = {
            playStatus: false
        }
    }

    timeUpdate = () => {
        var hours = Math.floor(this.audioPlayer.currentTime / 120);
        var minutes = Math.floor(this.audioPlayer.currentTime / 60);
        var seconds = Math.floor(this.audioPlayer.currentTime - minutes * 60);
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
        this.timer = audioTime
    }

    play = () => {
        const { name } = this.props;
        if(name)
        window.document.title = name.replace('.mp3',' | React Player')
        this.setState({playStatus: true})
    }

    pause = () => {
        this.setState({playStatus: false})
    }

    render(){
        let togglePlay
        const { name, src } = this.props
        let url = (src) ? URL.createObjectURL(src[0]) : null
        console.log(this.state.playStatus);

        (this.state.playStatus) ?
        togglePlay = <Pause pause={this.pause} /> :
        togglePlay = <Play play={this.play} />
        return(
            <div className="current-player">
                <audio src={url} ref={audio => this.audioPlayer = audio}></audio>
                <div className="timer">
                    <p>{name}</p>
                    <div></div>
                    <span aria-label="timer">{(this.timer) ? this.timer : "00:00"}</span>
                </div>
                <div className="controls">
                    <i className="material-icons" title="Repeat">repeat</i>
                    <i className="fa fa-square" title="Stop"></i>
                    <i className="fa fa-backward" title="Backward"></i>
                    {togglePlay}
                    <i className="fa fa-forward" title="Forward"></i>
                    <i className="material-icons" title="Shuffle">shuffle</i>
                </div>
            </div>
        )
    }
}

export default CurrentPlayer