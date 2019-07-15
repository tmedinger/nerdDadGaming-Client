import React, { Component } from "react";
import "./header.css";

class Header extends Component {
    constructor() {
        super();
        this.state = {
            isLoggedIn : false,
        }
    }

    render() {
        return(
            <div>
                <h1 id="siteTitle">A Big Centered Title</h1>
            </div>
        )
    }
}

export default Header;