import { Injectable } from '@nestjs/common';
import TicketRepository from '../../repository/ticket.Irepository';

@Injectable()
export default class GetAllTicketsUseCase {
  
  constructor(
    private TicketRepository: TicketRepository,
  ) {}

  public async execute(id: string): Promise<any> {

    return await this.TicketRepository.getTicketById(id);

  }

}

