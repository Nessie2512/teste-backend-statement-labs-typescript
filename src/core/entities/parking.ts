import { Entity } from "../@seed/entity";

export type parkingProps = {

    name: string;
    location: string;
    capacity: number;
    
}

export class Parking extends Entity<parkingProps>{
    
    private readonly _props: parkingProps; 

    constructor(props:parkingProps) {
        super(props);
        this._props =  props;
    }

}