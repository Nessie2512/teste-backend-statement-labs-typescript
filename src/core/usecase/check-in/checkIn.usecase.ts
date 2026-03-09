import { Injectable } from '@nestjs/common';
import Ticket from "../../entities/Ticket";
import SpotRepository from '../../repository/spot.Irepository';
import TicketRepository from '../../repository/ticket.Irepository';
import PlateNumber from '../../@seed/plateNumber'; 

@Injectable()
export default class CheckInUseCase {
  
  constructor(
    private ticketRepository: TicketRepository,
    private spotRepository: SpotRepository,
  ) {}

  public async execute(plate: string) {

    const plateNumber = PlateNumber.create(plate);

    const freeSpots: any = await this.spotRepository.findOneFreeSpot();

    if (freeSpots) {
      
      const createTicket = Ticket.create({plateNumber: plateNumber,spotId: freeSpots?.id});

      await this.ticketRepository.saveTicket(createTicket);

      return {
        ticketId: createTicket.Id,
        plateNumber: createTicket.plate.value,
        spotId: createTicket.spotId,
        checkedTime: createTicket.createdAt,
      };

    }

    throw new Error('No free spots available');

  }
}


