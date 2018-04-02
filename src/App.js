import React, { Component } from 'react';
import CardList from './components/container/cardListContainer'

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