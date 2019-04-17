import React, {Component, ReactNode} from 'react';
import Tank from './../Tank';
import {BOARD_HEIGHT, BOARD_WIDTH, OBSTACLE_TYPE_METAL, OBSTACLE_TYPE_TRANSPARENT} from "../../constants";
import Missile from "../Missile";
import Obstacle from "../Obstacle";
import uuidv4 from 'uuid/v4';
import assetSoundShot from "../../assets/audio/shot.wav";
import {MAP_1} from "../../maps/Map1";
import './Board.scss';

/**
 * Class Board - board component.
 */
export default class Board extends Component<any, any> {
    /**
     * Board constructor.
     *
     * @param props - properties
     */
    public constructor(props: any) {
        super(props);

        this.state = {
            tanks: [
                {id: uuidv4(), x: 25, y: 25, r: 90, ai: false},
                {id: uuidv4(), x: 1062, y: 124, r: 270, ai: true},
                {id: uuidv4(), x: 1062, y: 224, r: 270, ai: true},
                {id: uuidv4(), x: 1062, y: 424, r: 270, ai: true},
                {id: uuidv4(), x: 1062, y: 702, r: 0, ai: true}
            ],
            obstacles: MAP_1,
            missiles: [],
            sounds: []
        };
        this.handleFireMissile = this.handleFireMissile.bind(this);
        this.handleFellMissile = this.handleFellMissile.bind(this);
        this.spawnTank = this.spawnTank.bind(this);
    }

    /**
     * Missile fire handler.
     *
     * @param missile - missile definition
     */
    protected handleFireMissile(missile: any): void {
        if (this.state.missiles.filter((m: any) => m.tank.id === missile.tank.id).length === 0) {
            this.setState({
                missiles: this.state.missiles.concat(missile),
                sounds: this.state.sounds.concat({id: missile.id})
            });
            window.setTimeout(() => this.setState({
                sounds: this.state.sounds.filter((sound: any) => sound.id !== missile.id)
            }), 500);
        }
    }

    /**
     * Missile fell handler.
     *
     * @param id - missile id
     * @param originTank - tank that fired a missile
     * @param hitObjects - objects that were hit by missile
     */
    protected handleFellMissile(id: string, originTank: any, hitObjects: any): void {
        const newState: any = {};
        // remove hit missiles
        newState.missiles = this.state.missiles.filter(
            (missile: any) => !(
                missile.id === id ||
                hitObjects.filter((o: any) => o.id === missile.id).length > 0
            )
        );
        // remove hit destructible obstacles
        newState.obstacles = this.state.obstacles.filter(
            (obstacle: any) => !(
                hitObjects.filter((o: any) => o.id === obstacle.id).length > 0 &&
                [OBSTACLE_TYPE_METAL, OBSTACLE_TYPE_TRANSPARENT].indexOf(obstacle.type) === -1
            )
        );
        // remove hit tanks
        newState.tanks = this.state.tanks.filter(
            (tank: any) => {
                if (
                    // this tank wasn't hit
                    hitObjects.filter((o: any) => o.id === tank.id).length === 0 ||
                    // ignore if ai hit ai
                    tank.ai === originTank.ai ||
                    // ignore if we hit self
                    tank.id === originTank.id
                ) {
                    return true;
                }
                // set respawn tank timer
                window.setTimeout(() => this.spawnTank(tank), 2500);
                return false;
            }
        );
        this.setState(newState);
    }

    /**
     * Spawn tank.
     *
     * @param tank - tank definition
     */
    protected spawnTank(tank: any): void {
        this.setState({
            tanks: this.state.tanks.concat(tank)
        });
    }

    /**
     * Render component.
     */
    public render(): ReactNode {
        return (
            <div
                className="board"
                style={{width: BOARD_WIDTH, height: BOARD_HEIGHT}}
            >
                {
                    this.state.tanks.map((tank: any) => (
                        <Tank
                            key={tank.id}
                            id={tank.id}
                            ai={tank.ai}
                            x={tank.x}
                            y={tank.y}
                            r={tank.r}
                            handleFireMissile={this.handleFireMissile}
                        />
                    ))
                }
                {
                    this.state.obstacles.map((obstacle: any) => (
                        <Obstacle
                            key={obstacle.id}
                            id={obstacle.id}
                            type={obstacle.type}
                            x={obstacle.x}
                            y={obstacle.y}
                            w={obstacle.w}
                            h={obstacle.h}
                        />
                    ))
                }
                {
                    this.state.missiles.map((missile: any) => (
                        <Missile
                            key={missile.id}
                            id={missile.id}
                            tank={missile.tank}
                            x={missile.x}
                            y={missile.y}
                            r={missile.r}
                            handleFellMissile={this.handleFellMissile}
                        />
                    ))
                }
                {
                    this.state.sounds.map((sound: any) => (
                        <audio key={sound.id} src={assetSoundShot} autoPlay/>
                    ))
                }
            </div>
        );
    }
}