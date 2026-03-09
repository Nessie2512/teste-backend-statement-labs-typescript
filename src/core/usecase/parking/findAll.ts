import { Injectable } from '@nestjs/common';
import IParkingRepository from "../../repository/parking.Irepository";

@Injectable()
export default class FindAllParkingUseCase {
  
  constructor(
    private IParkingRepository: IParkingRepository,
  ) {}

  public async execute(): Promise<any> {

    const parking = await this.IParkingRepository.findAll();

    return parking;

  }

}

