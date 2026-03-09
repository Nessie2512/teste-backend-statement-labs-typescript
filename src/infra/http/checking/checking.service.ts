import { Injectable } from '@nestjs/common';
import { CreateCheckingDto } from './dto/create-checking.dto';
import { UpdateCheckingDto } from './dto/update-checking.dto';

@Injectable()
export class CheckingService {
  create(createCheckingDto: CreateCheckingDto) {
    return 'This action adds a new checking';
  }

  findAll() {
    return `This action returns all checking`;
  }

  findOne(id: number) {
    return `This action returns a #${id} checking`;
  }

  update(id: number, updateCheckingDto: UpdateCheckingDto) {
    return `This action updates a #${id} checking`;
  }

  remove(id: number) {
    return `This action removes a #${id} checking`;
  }
}
