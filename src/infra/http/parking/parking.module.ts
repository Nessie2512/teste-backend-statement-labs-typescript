import { Module } from '@nestjs/common';
import { ParkingService } from './parking.service';
import { ParkingController } from './parking.controller';
import CreateParkingUseCase from '../../../core/usecase/parking/create';
import FindAllParkingUseCase from '../../../core/usecase/parking/findAll';
import DeleteParkingUseCase from '../../../core/usecase/parking/delete';
import IParkingRepository from 'src/core/repository/parking.Irepository';
import { ParkingPrismaRepository } from '../../../infra/database/prisma/parking/parkingPrismaRepository';

@Module({
  controllers: [ParkingController],
  providers: [ParkingService,
    CreateParkingUseCase,
    FindAllParkingUseCase,
    DeleteParkingUseCase,
    {
      provide: IParkingRepository,
      useClass: ParkingPrismaRepository
    }
  ],
})
export class ParkingModule {}
