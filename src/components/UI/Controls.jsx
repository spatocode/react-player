import React, { Component } from 'react'

class Controls extends Component {
    constructor(){
        super()
        this.playButton = React.createRef()
    }
    render(){
        return(
            <div className="controls">
                <i className="material-icons" title="Repeat">repeat</i>
                <i className="fa fa-square" title="Stop"></i>
                <i className="fa fa-backward" title="Backward"></i>
                <i className="material-icons" title="Play" onClick={this.props.play} ref={this.playButton}>play_circle_filled</i>
                <i className="fa fa-forward" title="Forward"></i>
                <i className="material-icons" title="Shuffle">shuffle</i>
            </div>
        )
    }
}

export default Controls