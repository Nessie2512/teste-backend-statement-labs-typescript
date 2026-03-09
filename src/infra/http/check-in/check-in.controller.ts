import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CheckInService } from './check-in.service';
import { CreateCheckInDto,CreateCheckOutDto } from './dto/create-check-in.dto';
import { UpdateCheckInDto } from './dto/update-check-in.dto';

@Controller('check')
export class CheckInController {
  constructor(private readonly checkInService: CheckInService) {}

  @Post('check-in')
  public async checkIn(@Body() createCheckInDto: CreateCheckInDto) {
    return await this.checkInService.createCheckIn(createCheckInDto);
  }

  @Post('check-out')
  public async checkOut(@Body() createCheckOutDto: CreateCheckOutDto) {
    return await this.checkInService.createCheckOut(createCheckOutDto);
  }

  @Get('getAllTickets')
  public async getAllTicketss() {
    return await this.checkInService.getAllTicketsss();
  }

  @Get('getAllStillCheckedInTickets')
  public async getAllStillCheckedInTickets() {
    return await this.checkInService.getAllStillCheckedInTicketss();
  }


  @Get('getAllCheckedOutTickets')
  public async findAll() {
    return await this.checkInService.getAllCheckedOutTicketss();
  }


  @Get('getTicketById/:id')
  public async findOne(@Param('id') id: string) {
    return await this.checkInService.getTicketByIdd(id);
  }


}
