import './Board.scss';
import React, {Component, ReactNode} from 'react';
import Tank from './../Tank';
import {BOARD_HEIGHT, BOARD_WIDTH, TANK_HEIGHT, TANK_WIDTH} from "../../constants";
import Missile from "../Missile";
import Obstacle from "../Obstacle";
import uuidv4 from 'uuid/v4';
import assetSoundShot from "../../assets/audio/shot.wav";
import {MAP_1} from "../../maps/Map1";
import {ObstacleType} from "../Obstacle/ObstacleType";
import MissileModel from "../Missile/MissileModel";
import Stateless from "../../models/Stateless";
import BoardStateModel from "./BoardStateModel";
import TankModel from "../Tank/TankModel";

/**
 * Class Board - board component.
 */
export default class Board extends Component<Stateless, BoardStateModel> {
    /**
     * Board constructor.
     *
     * @param props - properties
     */
    public constructor(props: Stateless) {
        super(props);

        this.state = {
            tanks: [
                {
                    id: uuidv4(),
                    location: {x: 25, y: 25},
                    dimension: {width: TANK_WIDTH, height: TANK_HEIGHT},
                    rotation: 90,
                    ai: false
                },
                {
                    id: uuidv4(),
                    location: {x: 1062, y: 124},
                    dimension: {width: TANK_WIDTH, height: TANK_HEIGHT},
                    rotation: 270,
                    ai: true
                },
                {
                    id: uuidv4(),
                    location: {x: 1062, y: 224},
                    dimension: {width: TANK_WIDTH, height: TANK_HEIGHT},
                    rotation: 270,
                    ai: true
                },
                {
                    id: uuidv4(),
                    location: {x: 1062, y: 424},
                    dimension: {width: TANK_WIDTH, height: TANK_HEIGHT},
                    rotation: 270,
                    ai: true
                },
                {
                    id: uuidv4(),
                    location: {x: 1062, y: 702},
                    dimension: {width: TANK_WIDTH, height: TANK_HEIGHT},
                    rotation: 0,
                    ai: true
                }
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
    protected handleFireMissile(missile: MissileModel): void {
        if (this.state.missiles.filter((m) => m.owner.id === missile.owner.id).length === 0) {
            this.setState({
                missiles: this.state.missiles.concat(missile),
                sounds: this.state.sounds.concat({id: missile.id})
            });
            window.setTimeout(() => this.setState({
                sounds: this.state.sounds.filter((sound) => sound.id !== missile.id)
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
            (missile) => !(
                missile.id === id ||
                hitObjects.filter((o: any) => o.id === missile.id).length > 0
            )
        );
        // remove hit destructible obstacles
        newState.obstacles = this.state.obstacles.filter(
            (obstacle) => !(
                hitObjects.filter((o: any) => o.id === obstacle.id).length > 0 &&
                // it should be not possible to destroy metal and transparent obstacles
                [ObstacleType.METAL, ObstacleType.TRANSPARENT].indexOf(obstacle.type) === -1
            )
        );
        // remove hit tanks
        newState.tanks = this.state.tanks.filter(
            (tank) => {
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
    protected spawnTank(tank: TankModel): void {
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
                    this.state.tanks.map((tank) => (
                        <Tank
                            key={tank.id}
                            id={tank.id}
                            ai={tank.ai}
                            location={tank.location}
                            rotation={tank.rotation}
                            handleFireMissile={this.handleFireMissile}
                        />
                    ))
                }
                {
                    this.state.obstacles.map((obstacle) => (
                        <Obstacle
                            key={obstacle.id}
                            id={obstacle.id}
                            type={obstacle.type}
                            location={obstacle.location}
                            dimension={obstacle.dimension}
                        />
                    ))
                }
                {
                    this.state.missiles.map((missile) => (
                        <Missile
                            key={missile.id}
                            id={missile.id}
                            owner={missile.owner}
                            location={missile.location}
                            rotation={missile.rotation}
                            handleFellMissile={this.handleFellMissile}
                        />
                    ))
                }
                {
                    this.state.sounds.map((sound) => (
                        <audio key={sound.id} src={assetSoundShot} autoPlay/>
                    ))
                }
            </div>
        );
    }
}