import React, { Component } from 'react'
import Controls from './Controls'
import '../../stylesheets/CurrentPlayer.scss'

class CurrentPlayer extends Component {
    constructor(props){
        super(props)
        this.state = {
            playStatus: false
        }
        this.audioPlayer = React.createRef()
        this.playButton = React.createRef()
    }

    play = (e) => {
        const { name } = this.props;
        if(name && this.audioPlayer.current.paused){
            window.document.title = name.replace('.mp3',' | React Player')
            this.audioPlayer.current.play()
            e.currentTarget.innerHTML = "pause_circle_filled"
            console.log(e.currentTarget.innerHTML)
        }
        else{
            this.audioPlayer.current.pause()
            e.currentTarget.innerHTML = "play_circle_filled"
            console.log(e.currentTarget.innerHTML)
        }
    }

    render(){
        const { name, src } = this.props
        let url = (src) ? URL.createObjectURL(src[0]) : null;
        return(
            <div className="current-player">
                <audio src={url} ref={this.audioPlayer}></audio>
                <div className="timer">
                    <p>{name}</p>
                    <div></div>
                    <span aria-label="timer">{(this.timer) ? this.timer : "00:00"}</span>
                </div>
                <Controls ref={this.playButton} play={this.play} />
            </div>
        )
    }
}

export default CurrentPlayer