import type Ticket from "./Ticket.js";

export class Fee {
    private amount: number;
    
    constructor(private ticket: Ticket) {
        this.amount = 0;
    }

    private calculateTimeStayed(): number {
        if (!this.ticket.ischeckedOut) {
            throw new Error("Ticket is not checked out yet");
        }
        if(this.ticket.hoursStayed > 0 && this.ticket.hoursStayed <= 6) {
            return this.amount = 6 * 300;

        }else if(this.ticket.hoursStayed > 6 && this.ticket.hoursStayed ) {
            const partialDiscount = (this.ticket.hoursStayed - 6) * 200;
            return this.amount = (6 * 300) + partialDiscount;
        }
        else {       
            return this.amount = 0;
        }
    }

    public get feeAmount(): number {
        return this.calculateTimeStayed();
    }

}