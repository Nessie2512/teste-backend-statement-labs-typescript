/*import type Ticket from "../../entities/Ticket.ts";
import type TicketRepository from "../../repository/ticket.Irepository.ts";

export default class TicketInMemoryRepo implements TicketRepository{
private tickets: Ticket[] = [];
async SaveTicket(ticket: Ticket): Promise<Ticket> {
    this.tickets.push(ticket);
    return ticket;
}

async getAllCheckedOutTickets(): Promise<Ticket[]> {
    return this.tickets.filter(t => t.ischeckedOut);
}

async getTicketById(ticketId: string): Promise<Ticket | null> {
    return this.tickets.find(t => t.Id === ticketId) || null;
}

async deleteTicket(ticketId: string): Promise<void> {
    const index = this.tickets.findIndex(t => t.Id === ticketId);
    if (index !== -1) {
        this.tickets.splice(index, 1);
    }
}

async getAllTickets(): Promise<Ticket[]> {
    return this.tickets;
}

async updateTicket(ticketId: string, updateData: Partial<Ticket>): Promise<Ticket | null> {
    const ticket = this.tickets.find(t => t.Id === ticketId);
    if (!ticket) return null;
    Object.assign(ticket, updateData);
    return ticket;
}

async getAllStillCheckedInTickets(): Promise<Ticket[]> {
    return this.tickets.filter(t => !t.ischeckedOut);
}

    async findById(id: string): Promise<Ticket | null> {
        return this.tickets.find(t => t.Id === id) || null;
    }

    async findAll(): Promise<Ticket[]> {
        return this.tickets;
    }

    async update(id: string, ticket: Ticket): Promise<Ticket | null> {
        const index = this.tickets.findIndex(t => t.Id === id);
        if (index === -1) return null;
        this.tickets[index] = ticket;
        return ticket;
    }

}
    */