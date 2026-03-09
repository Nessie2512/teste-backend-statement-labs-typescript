import { Injectable } from '@nestjs/common';
import ISpotRepository from "../../repository/spot.Irepository";
import IParkingRepository from "../../repository/parking.Irepository";

@Injectable()
export default class CreateSpotUseCase {
  
  constructor(
    private ISpotRepository: ISpotRepository,
    private IParkingRepository: IParkingRepository
  ) {}
  
  
  public async execute({name,parkingId}: parkingPayload) {

    const spotExists = await this.ISpotRepository.checkSpot(name);

    if (spotExists !== null) {

        throw new Error('spots already exists!');

    }

    const capacity = await this.IParkingRepository.checkCapacity(parkingId);

    if (capacity > 50) {

      throw new Error('capacity exhausted');

    }

    await this.ISpotRepository.create({name,parkingId});

  }

}


export type parkingPayload = {
    name: string; 
    parkingId: string;
}
