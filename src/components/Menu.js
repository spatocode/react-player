import React from 'react'
import '../stylesheets/Menu.scss'
//import {Link} from 'react-router-dom'

const Menu = () =>
    <div className="menu">
        <i className="material-icons" title="Home">home</i>
        <i className="material-icons" title="Now playing">playlist_play</i>
        <i className="material-icons" title="Playists">library_music</i>
        <i className="material-icons" title="Settings">settings</i>
    </div>

export default Menu