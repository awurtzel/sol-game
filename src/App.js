import React, { Component } from 'react';
import CardList from './components/cardListContainer'

class App extends Component {
    render() {
        return (
            <div className="app">
                <CardList />
            </div>
        );
    }
}

export default App;