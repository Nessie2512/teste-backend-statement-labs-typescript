import { Module } from '@nestjs/common';
import { SpotService } from './spot.service';
import { SpotController } from './spot.controller';
import CreateSpotUseCase from '../../../core/usecase/spots/create';
import FindAllSpotUseCase from '../../../core/usecase/spots/findAll';
import DeleteSpotUseCase from '../../../core/usecase/spots/delete';
import SpotRepository from '../../../core/repository/spot.Irepository';
import { SpotPrismaRepository } from '../../../infra/database/prisma/spot/spotPrismaRepository';
import IParkingRepository from 'src/core/repository/parking.Irepository';
import { ParkingPrismaRepository } from '../../../infra/database/prisma/parking/parkingPrismaRepository';

@Module({
  controllers: [SpotController],
  providers: [SpotService,
    CreateSpotUseCase,
    FindAllSpotUseCase,
    DeleteSpotUseCase,
    {
      provide: SpotRepository,
      useClass: SpotPrismaRepository
    },
      {
          provide: IParkingRepository,
          useClass: ParkingPrismaRepository
      }
  ],
})
export class SpotModule {}
