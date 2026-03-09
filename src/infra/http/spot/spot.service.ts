import { HttpException, Injectable } from '@nestjs/common';
import { CreateSpotDto } from './dto/create-spot.dto';
import { UpdateSpotDto } from './dto/update-spot.dto';
import CreateSpotUseCase from '../../../core/usecase/spots/create';
import FindAllSpotUseCase from '../../../core/usecase/spots/findAll';
import DeleteSpotUseCase from '../../../core/usecase/spots/delete';

@Injectable()
export class SpotService {

  constructor(
    private readonly createSpotUseCase: CreateSpotUseCase,
    private readonly findAllSpotUseCase: FindAllSpotUseCase,
    private readonly deleteSpotUseCase: DeleteSpotUseCase,
  ){}
  public async create({spot,parkingId}: CreateSpotDto) {
    
    try {
      
      await this.createSpotUseCase.execute({name: spot, parkingId});

    } catch (error) {
      
      throw new HttpException(error.message,error.statuCode);

    }
  }

  public async findAll() {

    try {
      
     return await this.findAllSpotUseCase.execute();

    } catch (error) {
      
      throw new HttpException(error.message,error.statuCode);

    }
  }

  public async findOne(id: number) {
    return `This action returns a #${id} spot`;
  }

  public async update(id: string, updateSpotDto: UpdateSpotDto) {
   
        try {
      

        } catch (error) {
          
          throw new HttpException(error.message,error.statuCode);
    
        }
  }

  public async remove(id: string) {
    
        try {
          
          await this.deleteSpotUseCase.execute(id);
    
        } catch (error) {
          
          throw new HttpException(error.message,error.statuCode);
    
        }

  }
}
