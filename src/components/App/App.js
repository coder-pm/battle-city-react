import React, {Component} from 'react';
import './App.scss';
import Board from "../Board/Board";

class App extends Component {
    render() {
        return (
            <div className="tanks-app">
                <Board/>
            </div>
        );
    }
}

export default App;