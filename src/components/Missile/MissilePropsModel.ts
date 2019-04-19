import Point from "../../models/Point";

/**
 * Interface MissilePropsModel - properties model.
 */
export default interface MissilePropsModel {
    id: string;
    owner: any;
    location: Point;
    rotation: number;
    handleFellMissile: (id: string, owner: any, objectIds: Array<any>) => void;
}