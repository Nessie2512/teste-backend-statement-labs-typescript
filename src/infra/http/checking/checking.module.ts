import { Module } from '@nestjs/common';
import { CheckingService } from './checking.service';
import { CheckingController } from './checking.controller';

@Module({
  controllers: [CheckingController],
  providers: [CheckingService],
})
export class CheckingModule {}
