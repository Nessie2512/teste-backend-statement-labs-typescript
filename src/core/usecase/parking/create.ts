import { Injectable } from '@nestjs/common';
import IParkingRepository from "../../repository/parking.Irepository";
import { Parking } from '../../entities/parking';

@Injectable()
export default class CreateParkingUseCase {
  
  constructor(
    private IParkingRepository: IParkingRepository,
  ) {}

  public async execute({name,capacity,location}: parkingPayload) {

    const parkingExists = await this.IParkingRepository.checkPark(name);

    if (parkingExists !== null) {

        throw new Error('No free spots available');

    }

    //const {} = new Parking({name});

    await this.IParkingRepository.create({name,capacity,location});

  }

}


export type parkingPayload = {
    name: string;
    location: string;
    capacity: number;
}
