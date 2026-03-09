import { Entity } from "../@seed/entity.js";
import Identifier from "../@seed/identifier";
import type PlateNumber from "../@seed/plateNumber.js";

export type IticketProps = {
    plateNumber: PlateNumber;
    spotId: string;
    //amountToPay?: number
}

export default class Ticket extends Entity<IticketProps> {

    private isCheckedOut: boolean;
    private checkOutTime: Date;
    private amountToPay: number;

    private constructor(props: IticketProps, id?: string) {
        super(props, id);
        this.isCheckedOut = false;
        this.amountToPay = 0;
    }

    public static create(props: IticketProps, id?: string): Ticket {
        const ticket = new Ticket(props, id);
        return ticket;
    }



    public get plate(): PlateNumber {
        return this.props.plateNumber;
    }

    public set plate(value: PlateNumber) {
        if (!this.isValidPlateNumber(value)) {
            throw new Error("Invalid plate number");
        }
        this.props.plateNumber = value;
        this.update();
    }



    public get spotId(): string {
        return this.props.spotId;
    }



    public get ischeckedOut(): boolean {
        return this.isCheckedOut;
    }



    public checkOut(isCheckedOut: boolean): void {
       
        if (this.isCheckedOut) {
            throw new Error("Ticket is already checked out");
        }

        this.isCheckedOut = true;
        this.setTheAmoutToPay(this.calculateTheAmountToPay());
        this.checkOutTime = new Date();
        this.update();
    }

    private calculateTheAmountToPay(): number {
        if (!this.ischeckedOut) {
            throw new Error("Ticket is not checked out yet");
        }
        if(this.hoursStayed > 0 && this.hoursStayed <= 6) {
            return  6 * 300;

        }else if(this.hoursStayed > 6 && this.hoursStayed ) {
            const partialDiscount = (this.hoursStayed - 6) * 200;
            return  (6 * 300) + partialDiscount;
        }
        else {       
            return 0;
        }
    }
    
    public get checkOutTimeValue(): Date | undefined {
        return this.checkOutTime;
    }



    public get hoursStayed(): number {
        if (!this.isCheckedOut) {
            throw new Error("Ticket is not checked out yet");
        }
        const timeInMilliseconds = (this.checkOutTimeValue!.getTime() - this.createdAt.getTime());
        return Math.floor(timeInMilliseconds / 1000 / 60 / 60);
    }



    public get amount(): number | undefined {
        if (!this.isCheckedOut) {
            throw new Error("Ticket is not checked out yet");
        }
        return this.amountToPay;
    }


    private setTheAmoutToPay(amount: number): void {
        if (!this.isCheckedOut) {
            throw new Error("Ticket is not checked out yet");
        }
        this.amountToPay = amount;
        this.update();
    }


    public get timestayed(): string{
        if (!this.isCheckedOut) {
            throw new Error("Ticket is not checked out yet");
        }
        const timeInMilliseconds = (this.checkOutTimeValue!.getTime() - this.createdAt.getTime());
        const hours = Math.floor(timeInMilliseconds / 1000 / 60 / 60);
        const minutes = Math.floor((timeInMilliseconds - (hours * 1000 * 60 * 60)) / 1000 / 60);
        return `${hours} hours and ${minutes} minutes`;
       }


    private isValidPlateNumber(plateNumber: PlateNumber): boolean {
           if (!plateNumber.isValue(plateNumber.value)) {
            return false
        }
        return true;
    }



   private isValidIdentifier(identifier: string): boolean {
        const identifierInstance = Identifier.create(identifier);
        return identifierInstance.isValue(identifier);
    }





}