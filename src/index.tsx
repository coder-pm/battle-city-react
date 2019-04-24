import React from 'react';
import ReactDOM from 'react-dom';
import Game from './components/Game';
import './index.scss';
import World from "./game/classes/World";

ReactDOM.render(<Game world={new World()}/>, document.getElementById('root'));