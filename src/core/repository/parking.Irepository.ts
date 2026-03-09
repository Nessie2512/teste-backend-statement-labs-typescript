import {parkingProps} from "../entities/parking";


export default abstract class IParkingRepository {

  abstract create(parkingProps: parkingProps): Promise<void>;
  abstract findAll(): Promise<any>;
  abstract findById(id: string): Promise<any>;
  abstract checkPark(name: string): Promise<void>;
  abstract checkCapacity(id: string): Promise<any>;
  abstract delete(id: string): Promise<void>;
  
}