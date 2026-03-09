import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CheckoutService } from './checkout.service';
import { CreateCheckoutDto } from './dto/create-checkout.dto';
import { UpdateCheckoutDto } from './dto/update-checkout.dto';

@Controller('checkout')
export class CheckoutController {
  constructor(private readonly checkoutService: CheckoutService) {}

  @Post()
  public async create(@Body() createCheckoutDto: CreateCheckoutDto) {
    return this.checkoutService.create(createCheckoutDto);
  }

  @Get()
  public async findAll() {
    return this.checkoutService.findAll();
  }

  @Get(':id')
  public async findOne(@Param('id') id: string) {
    return this.checkoutService.findOne(+id);
  }

}
