import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CheckingService } from './checking.service';
import { CreateCheckingDto } from './dto/create-checking.dto';
import { UpdateCheckingDto } from './dto/update-checking.dto';

@Controller('checking')
export class CheckingController {
  constructor(private readonly checkingService: CheckingService) {}

  @Post()
  create(@Body() createCheckingDto: CreateCheckingDto) {
    return this.checkingService.create(createCheckingDto);
  }

  @Get()
  findAll() {
    return this.checkingService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.checkingService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCheckingDto: UpdateCheckingDto) {
    return this.checkingService.update(+id, updateCheckingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.checkingService.remove(+id);
  }
}
