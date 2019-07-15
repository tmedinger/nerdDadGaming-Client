import React, { Component } from 'react';
import './App.css';
import Grid from "@material-ui/core/Grid"
import Header from "./layout/header/header";
import Navbar from "./layout/navbar/navbar";
import Main from "./layout/main/main";
import Sidebar from "./layout/sidebar/sidebar";
import Footer from "./layout/footer/footer";

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
                <Grid container spacing={4}>
                    <Grid item xs={12}>
                        <Header />
                    </Grid>
                    <Grid item xs={12}>
                        <Navbar />
                    </Grid>
                    <Grid item xs={9}>
                        <Main />
                    </Grid>
                    <Grid item xs={3}>
                        <Sidebar />
                    </Grid>
                    <Grid item xs={12}>
                        <Footer />
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default App;
