import { randomUUID } from "crypto";
import { Entity } from "../@seed/entity";

type spotStatus = "Free" |  "Occupied";

export type spotProps = {
    name: string;
    code?: string;
    parkingId: string;
}

export default class Spot extends Entity<spotProps>{
    
    private spotProps: spotProps;
    private spotStatus: spotStatus;

   private constructor(props: spotProps,id?: string) {
        super(props,id);
        this.spotStatus = "Free";
        this.spotProps = props;
    }

    public static create(props: spotProps,id?: string): Spot {
        return new Spot({
            ...props,
            code: props?.code ?? randomUUID()
        },id);
    }

    public get isFree(): boolean {
        return this.spotStatus === "Free";
    }
    

    public FreeSpot(): void {
        if(this.isFree){
            throw new Error("Spot is already free.");
        }
        this.ChangeTofreeSpot();
    }


    public OccupySpot(): void {
        if(!this.isFree){
            throw new Error("Spot is already occupied.");
        }
        this.ChangeToOccupySpot();
    }


    private ChangeTofreeSpot():void{
        this.spotStatus = "Free";
        this.update();

    }

    private ChangeToOccupySpot():void{
        this.spotStatus = "Occupied";
        this.update();
    }
}