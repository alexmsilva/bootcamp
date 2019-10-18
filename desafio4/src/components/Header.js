import React, { Component } from 'react'

import './Header.css';
import profile from '../assets/profile.png';

class Header extends Component {
    render() {
        return (
            <div id="header">
                <h1>fakebook</h1>
                <div className="profile">
                    <div>Meu perfil</div>
                    <img src={profile} />
                </div>
            </div>
        );
    }
}

export default Header;
