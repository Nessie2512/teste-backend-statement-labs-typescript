import type AggregateRoot from "../@seed/aggregateRoot.ts";
import { Entity } from "../@seed/entity";
import type Spot from "./Spot.ts";

export type parkingProps = {

    name: string;
}


export default class Parking implements AggregateRoot{
    private readonly spots: Spot[] = [];

    constructor(spots: Spot[]) {
        this.spots.push(...spots);
    }

   public feeSpot(id: string): void {
        const spot = this.spots.find(s => s.Id === id);
        if (!spot) {
            throw new Error("Spot not found");
        }
        spot.FreeSpot();
    }

    findFreeSpot(): Spot {
        const spot = this.spots.find(s => s.isFree === true);
        if (!spot) {
            throw new Error("Spot free not found");
        }
        return spot;
    }

    public occupySpot(): Spot {
        const spot = this.spots.find(s => s.isFree === true);
        if (!spot) {
            throw new Error("Spot free not found");
        }
        spot.OccupySpot();
        return spot;
      }

      public get listAllfreeSpots(): Spot[] {
        return this.spots.filter(s => s.isFree === true);
      }

      public get listAllOccupiedSpots(): Spot[] {
        return this.spots.filter(s => s.isFree === false);
      }

}