import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ParkingService } from './parking.service';
import { CreateParkingDto } from './dto/create-parking.dto';
import { UpdateParkingDto } from './dto/update-parking.dto';

@Controller('parking')
export class ParkingController {
  constructor(private readonly parkingService: ParkingService) {}

  @Post()
  public async create(@Body() createParkingDto: CreateParkingDto) {
    await this.parkingService.create(createParkingDto);
  }

  @Get()
  public async findAll() {
    return await this.parkingService.findAll();
  }

  @Get(':id')
  public async findOne(@Param('id') id: string) {
    return await this.parkingService.findOne(id);
  }


  @Delete(':id')
  public async remove(@Param('id') id: string) {
    await this.parkingService.remove(id);
  }
}
