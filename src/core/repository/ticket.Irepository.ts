import type Ticket from "../entities/Ticket.ts";

export default abstract class TicketRepository {
//   getTicketsByUserId(userId: string): Promise<Ticket[]>;
  abstract getTicketById(ticketId: string): Promise<Ticket | null>;
  abstract saveTicket(ticket: Ticket): Promise<any>;
  abstract getAllTickets(): Promise<Ticket[]>;
  abstract getAllStillCheckedInTickets(): Promise<Ticket[]>;
  abstract getAllCheckedOutTickets(): Promise<Ticket[]>;
  abstract updateTicket(ticketId: string, isCheckedOut: boolean, amount: number): Promise<Ticket | null>;
  abstract deleteTicket(ticketId: string): Promise<void>;

}