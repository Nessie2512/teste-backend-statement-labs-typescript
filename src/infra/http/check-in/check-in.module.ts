import { Module } from '@nestjs/common';
import { CheckInService } from './check-in.service';
import { CheckInController } from './check-in.controller';
import CheckInUseCase from '../../../core/usecase/check-in/checkIn.usecase';
import CheckOutUseCase from '../../../core/usecase/check-in/checkOut.usecase';
import GetAllCheckedOutTickets from '../../../core/usecase/check-in/getAllCheckedOutTickets';
import GetAllStillCheckedInTickets from '../../../core/usecase/check-in/getAllStillCheckedInTickets';
import GetAllTickets from '../../../core/usecase/check-in/getAllTickets';
import GetTicketById from '../../../core/usecase/check-in/getTicketById';
import ITicketRepository from "../../../core/repository/ticket.Irepository";
import { TicketrismaRepository } from '../../../infra/database/prisma/ticket/ticketPrismaRepository';
import SpotRepository from '../../../core/repository/spot.Irepository';
import { SpotPrismaRepository } from '../../../infra/database/prisma/spot/spotPrismaRepository';

@Module({
  controllers: [CheckInController],
  providers: [CheckInService,
    CheckInUseCase,
    GetAllCheckedOutTickets,
    GetAllStillCheckedInTickets,
    GetAllTickets,
    CheckOutUseCase,
    GetTicketById,
    {
      provide: ITicketRepository,
      useClass: TicketrismaRepository
    },
    {
      provide: SpotRepository,
      useClass: SpotPrismaRepository
    }
  ],
})
export class CheckInModule {}
