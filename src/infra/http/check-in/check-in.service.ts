import { HttpException, Injectable } from '@nestjs/common';
import { CreateCheckInDto, CreateCheckOutDto } from './dto/create-check-in.dto';
import { UpdateCheckInDto } from './dto/update-check-in.dto';
import CheckInUseCase from '../../../core/usecase/check-in/checkIn.usecase';
import CheckOutUseCase from '../../../core/usecase/check-in/checkOut.usecase';
import GetAllCheckedOutTickets from '../../../core/usecase/check-in/getAllCheckedOutTickets';
import GetAllStillCheckedInTickets from '../../../core/usecase/check-in/getAllStillCheckedInTickets';
import GetAllTickets from '../../../core/usecase/check-in/getAllTickets';
import GetTicketById from '../../../core/usecase/check-in/getTicketById';

@Injectable()
export class CheckInService {

  constructor(
    private readonly checkInUseCase: CheckInUseCase,
    private readonly checkOutUseCase: CheckOutUseCase,
    private readonly getAllCheckedOutTickets: GetAllCheckedOutTickets,
    private readonly getAllStillCheckedInTickets: GetAllStillCheckedInTickets,
    private readonly getAllTickets: GetAllTickets,
    private readonly getTicketById: GetTicketById,
  ){}
  
  public async createCheckIn({plate}: CreateCheckInDto) {
    
    
        try {
          
          return await this.checkInUseCase.execute(plate);
    
        } catch (error) {
          
          throw new HttpException(error.message,error.statuCode);
    
        }

  }

  public async createCheckOut({ticketId}: CreateCheckOutDto) {
    
        try {
          
          return await this.checkOutUseCase.execute(ticketId);
    
        } catch (error) {
          
          throw new HttpException(error.message,error.statuCode);
    
        }
  }

  public async getAllTicketsss() {

        try {
          
          return await this.getAllTickets.execute();
    
        } catch (error) {
          
          throw new HttpException(error.message,error.statuCode);
    
        }

  }


  public async getTicketByIdd(id: string) {

        try {
          
          return await this.getTicketById.execute(id);
    
        } catch (error) {
          
          throw new HttpException(error.message,error.statuCode);
    
        }

  }


  public async getAllStillCheckedInTicketss() {

        try {
          
          return await this.getAllStillCheckedInTickets.execute();
    
        } catch (error) {
          
          throw new HttpException(error.message,error.statuCode);
    
        }

  }


  public async getAllCheckedOutTicketss() {

        try {
          
          return await this.getAllCheckedOutTickets.execute();
    
        } catch (error) {
          
          throw new HttpException(error.message,error.statuCode);
    
        }

  }

}
