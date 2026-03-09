import { HttpException, Injectable } from '@nestjs/common';
import { CreateParkingDto } from './dto/create-parking.dto';
import { UpdateParkingDto } from './dto/update-parking.dto';
import CreateParkingUseCase from '../../../core/usecase/parking/create';
import FindAllParkingUseCase from '../../../core/usecase/parking/findAll';
import DeleteParkingUseCase from '../../../core/usecase/parking/delete';

@Injectable()
export class ParkingService {

  constructor(
    private readonly createParkingUseCase: CreateParkingUseCase,
    private readonly findAllParkingUseCase: FindAllParkingUseCase,
    private readonly deleteParkingUseCase: DeleteParkingUseCase,
  ){}

  public async create(createParkingDto: CreateParkingDto) {
    
    try {
      
      await this.createParkingUseCase.execute(createParkingDto);

    } catch (error) {
      
      throw new HttpException(error.message,error.statuCode);

    }

  }

  public async findAll() {

    try {

      return await this.findAllParkingUseCase.execute();
      
    } catch (error) {
      
          throw new HttpException(error.message,error.statuCode);

    }

  }

  public async findOne(id: string) {

    try {
      
    } catch (error) {

          throw new HttpException(error.message,error.statuCode);

    }

  }

  public async update(id: string, updateParkingDto: UpdateParkingDto) {
    
    try {
      
    } catch (error) {
      
          throw new HttpException(error.message,error.statuCode);

    }

  }

  public async remove(id: string) {

      try {
      
        await this.deleteParkingUseCase.execute(id);

    } catch (error) {
      
          throw new HttpException(error.message,error.statuCode);

    }
  }

}
