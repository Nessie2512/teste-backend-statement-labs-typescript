import { Injectable } from '@nestjs/common';
import TicketRepository from '../../repository/ticket.Irepository';

@Injectable()
export default class GetAllStillCheckedInTicketsUseCase {
  
  constructor(
    private TicketRepository: TicketRepository,
  ) {}

  
  public async execute(): Promise<any> {

    return await this.TicketRepository.getAllStillCheckedInTickets();

  }

}

