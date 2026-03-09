import { Injectable } from '@nestjs/common';
import ISpotRepository from "../../repository/spot.Irepository";

@Injectable()
export default class DeleteSpotUseCase {
  
  constructor(
    private ISpotRepository: ISpotRepository,
  ) {}

  public async execute(id: string): Promise<any> {

    const spot = await this.ISpotRepository.findById(id);

    if (!spot) {
        
        throw new Error("spot id not found in the system");

    }

    await this.ISpotRepository.delete(id);

  }

}

