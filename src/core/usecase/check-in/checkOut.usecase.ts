import { Injectable } from "@nestjs/common";
import SpotRepository from "../../repository/spot.Irepository.js";
import TicketRepository from "../../repository/ticket.Irepository.js";

@Injectable()
export default class CheckOutUseCase {

  constructor(
    private ticketRepository: TicketRepository,
    private spotRepository: SpotRepository
  ) {}

  public async execute(ticketId: string) {

    const ticket: any = await this.ticketRepository.getTicketById(ticketId);

    if (!ticket) {
      throw new Error("Ticket not found");
    }

    if (ticket.isCheckedOut) {
      throw new Error("Ticket already checked out");
    }

    const checkOutTime = new Date();

    const entryTime = new Date(ticket.createdAt).getTime();
    const exitTime = checkOutTime.getTime();

    const diffMs = exitTime - entryTime;

    if (diffMs <= 0) {
      throw new Error("Invalid checkout time");
    }

    // tempo total
    const durationMinutes = Math.ceil(diffMs / (1000 * 60));
    const durationHours = Math.ceil(durationMinutes / 60);

    let totalAmount = 0;

    // 🔹 Regra de cobrança
    if (durationHours <= 1) {
      totalAmount = 0;
    } 
    else if (durationHours <= 6) {
      totalAmount = durationHours * 300;
    } 
    else {
      const firstSixHours = 6 * 300;
      const remainingHours = durationHours - 6;
      const remainingValue = remainingHours * 200;

      totalAmount = firstSixHours + remainingValue;
    }


    await this.ticketRepository.updateTicket(
      ticket.id,
      true,
      totalAmount
    );

    return {
      ticketId: ticket.id,
      checkOutTime,
      timeSpent: {
        minutes: durationMinutes,
        hoursCharged: durationHours
      },
      amountToPay: totalAmount+" kz",
    };
  }
}