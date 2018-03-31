import React, { Component } from 'react';
import './App.css';
import {Provider} from "react-redux";
import configureStore from "./store/configureStore";
import CardList from "./components/CardList";

const store = configureStore();

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <CardList/>
            </Provider>,
            document.getElementById('app')
        );
    }
}

export default App;

//<div className="App">
//    <h1 className="App-title">Welcome to React bitches</h1>
//</div>