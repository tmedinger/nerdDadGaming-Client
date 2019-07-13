import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            sessionToken: "",
        }
    }

    render() {
        return (
            <div>
                <h1>Look something is displayed!</h1>
            </div>
        )
    }
}

export default App;
