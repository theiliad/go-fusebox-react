import * as React from "react";
import { Component } from 'react';
import './App.css';
import logo from './logo.svg';

//import { Provider } from 'react-redux';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Welcome to React + Go!</h2>
                </div>
                <p className="App-intro">
                    Edit any file in the /src/ folder to reload
                </p>
            </div>
        );
    }
}

export default App;
