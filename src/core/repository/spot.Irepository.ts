import Spot,{spotProps} from "../entities/Spot";


export default abstract class SpotRepository {
  abstract getSpotById(spotId: string): Promise<Spot | undefined>;
  // saveSpot(spot: Spot): Promise<Spot>;
  abstract getAllSpots(): Promise<Spot[]>;
  abstract getAllFreeSpots(): Promise<Spot[]>;
  abstract findOneFreeSpot(): Promise<Spot | null>;
  abstract findOneOccupiedSpot(id: string): Promise<Spot | null>;
  abstract getAllOccupiedSpots(): Promise<Spot[]>;
  abstract updateSpot(id:string,spot: spotProps): Promise<void>;
  abstract deleteSpot(spotId: string): Promise<void>;

  //
  abstract create(spotProps: spotProps): Promise<void>;
  abstract findAll(): Promise<any>;
  abstract findById(id: string): Promise<any>
  abstract checkSpot(spot: string): Promise<any>
  abstract delete(id: string): Promise<void>;
  
}