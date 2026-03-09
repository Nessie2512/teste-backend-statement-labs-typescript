import { Injectable } from '@nestjs/common';
import IParkingRepository from "../../repository/parking.Irepository";

@Injectable()
export default class DeleteParkingUseCase {
  
  constructor(
    private IParkingRepository: IParkingRepository,
  ) {}

  public async execute(id: string): Promise<any> {

    const parking = await this.IParkingRepository.findById(id);

    if (!parking) {
        
        throw new Error("Parking id not found");

    }

    await this.IParkingRepository.delete(id);

  }

}

