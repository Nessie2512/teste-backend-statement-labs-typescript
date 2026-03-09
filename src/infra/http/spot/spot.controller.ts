import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SpotService } from './spot.service';
import { CreateSpotDto } from './dto/create-spot.dto';
import { UpdateSpotDto } from './dto/update-spot.dto';

@Controller('spot')
export class SpotController {
  constructor(private readonly spotService: SpotService) {}

  @Post()
  public async create(@Body() createSpotDto: CreateSpotDto) {
    await this.spotService.create(createSpotDto);
  }

  @Get()
  public async findAll() {
    return await this.spotService.findAll();
  }

  @Get(':id')
  public async findOne(@Param('id') id: string) {
    return await this.spotService.findOne(+id);
  }


  @Delete(':id')
  public async remove(@Param('id') id: string) {
    await this.spotService.remove(id);
  }

}
