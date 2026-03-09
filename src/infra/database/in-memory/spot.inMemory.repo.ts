/*import type Spot from "../../entities/Spot.ts";
import type SpotRepository from "../../repository/spot.Irepository.ts";

export default class SpotinMemoryRepo implements SpotRepository{
    

private spots: Spot[] = [];

async deleteSpot(spotIdd: string): Promise<void> {
    this.spots = this.spots.filter(spot => spot.Id !== spotIdd);
}

async findOneFreeSpot(): Promise<Spot | null> {
    return this.spots.find(spot => !spot.isFree) || null;
}

async findOneOccupiedSpot(Idd: string): Promise<Spot | null> {
    return this.spots.find(spot => spot.Id === Idd && spot.isFree) || null;
}

async getAllFreeSpots(): Promise<Spot[]> {
    return this.spots.filter(spot => !spot.isFree);
}

async getAllOccupiedSpots(): Promise<Spot[]> {
    return this.spots.filter(spot => spot.isFree);
}

async getAllSpots(): Promise<Spot[]> {
    return this.spots;
}

async getSpotByIdd(spotIdd: string): Promise<Spot | null> {
    return this.spots.find(spot => spot.Id === spotIdd) || null;
}

async updateSpot(spot: Spot): Promise<Spot | null> {
    const index = this.spots.findIndex(s => s.Id === spot.Id);
    if (index !== -1) {
        this.spots[index] = spot;
        return spot;
    }
    return null;
}

async getSpotById(spotId: string): Promise<Spot | undefined> {
  const foundSpot = await this.spots.find(spot => spot.Id == spotId);
  return foundSpot;
}
}

*/