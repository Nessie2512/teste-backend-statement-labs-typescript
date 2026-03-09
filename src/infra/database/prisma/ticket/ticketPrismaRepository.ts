import ITicketRepository from "../../../../core/repository/ticket.Irepository";
import Spot, {spotProps} from "../../../../core/entities/Spot";
import { DatabaseService } from "../../database.service";
import { Injectable } from "@nestjs/common";
import Ticket from "../../../../core/entities/Ticket";


@Injectable()
export class TicketrismaRepository implements ITicketRepository {

        constructor(
            private readonly databaseRepository: DatabaseService
        ) {}


     public async getTicketById(ticketId: string): Promise<any> {
                
         try {
 
            return await this.databaseRepository.tickets.findFirst({
                where:{
                    id: ticketId
                }
            });

        } catch (error) {
            throw new Error("Could not create parking spot");
        }

    }
    
     public async saveTicket({Id,plate,spotId,ischeckedOut}: Ticket): Promise<any> {
        
                
         try {

           return await this.databaseRepository.tickets.create({
                data:{
                    id: Id,
                    plateNumber: plate.value,
                    spotId,
                    isCheckedOut: ischeckedOut
                }
            });

        } catch (error) {
            throw new Error("Could not create parking spot");
        }
    }
     public async getAllTickets(): Promise<any[]> {
        
                
         try {

            return await this.databaseRepository.tickets.findMany({
               include:{
                spot: true
               }
            });

        } catch (error) {
            throw new Error("Could not create parking spot");
        }
    }
     public async getAllStillCheckedInTickets(): Promise<any[]> {
       
                
         try {

            return await this.databaseRepository.tickets.findMany({
                where:{
                    isCheckedOut: false
                }
            });

        } catch (error) {
            throw new Error("Could not create parking spot");
        }
    }
     public async getAllCheckedOutTickets(): Promise<any> {
        
                
         try {

            return await this.databaseRepository.tickets.findMany({
                where:{
                   isCheckedOut: true
                }
            });

        } catch (error) {
            throw new Error("Could not create parking spot");
        }
    }

     public async updateTicket(ticketId: string, isCheckedOut: boolean, amount: number): Promise<any> {
      
                
         try {


             return await this.databaseRepository.tickets.update({
                where:{
                    id: ticketId,
                },
                data:{
                    amountToPay: +amount,
                    isCheckedOut: isCheckedOut,
                },
                include:{
                    spot: true
                }
            });


        } catch (error) {
            throw new Error("Could not create parking spot");
        }
    }

     public async  deleteTicket(ticketId: string): Promise<void> {
        
                
         try {

             await this.databaseRepository.tickets.delete({
                where:{
                    id: ticketId
                }
            });

        } catch (error) {
            throw new Error("Could not create parking spot");
        }
    }

    }

