import React, {Component} from 'react';
import './Obstacle.scss';
import World from "../../logic/World";

class Obstacle extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        World.registerObject(this.props.id, this.props.x, this.props.y, 20, 20);
    }

    componentWillUnmount() {
        World.removeObject(this.props.id);
    }

    render() {
        return (
            <div
                className="obstacle"
                style={{
                    left: this.props.x,
                    top: this.props.y
                }}
            />
        );
    }
}

export default Obstacle;