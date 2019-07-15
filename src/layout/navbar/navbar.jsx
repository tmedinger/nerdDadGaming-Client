import React, { Component } from "react";
import './navbar.css';

class Navbar extends Component {
    constructor() {
        super();
        this.state = {
            username: "",
            isLoggedIn: false
        };
    };

    render() {
        return(
            <div id="navbar">
                <p id="userGreeting">Hello [username]</p>
                <button id="logInOut">Login</button>
            </div>
        )
    }
}

export default Navbar;