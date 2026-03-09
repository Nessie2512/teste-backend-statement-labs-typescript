import { Injectable } from '@nestjs/common';
import ISpotRepository from "../../repository/spot.Irepository";

@Injectable()
export default class FindAllSpotUseCase {
  
  constructor(
    private IParkingRepository: ISpotRepository,
  ) {}

  public async execute(): Promise<any> {

    const spots = await this.IParkingRepository.findAll();

    return spots;

  }

}

