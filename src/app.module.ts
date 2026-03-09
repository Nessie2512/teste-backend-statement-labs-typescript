import { Module } from '@nestjs/common';
import { ParkingModule } from './infra/http/parking/parking.module';
import { SpotModule } from './infra/http/spot/spot.module';
import { DatabaseModule } from './infra/database/database.module';
import { CheckInModule } from './infra/http/check-in/check-in.module';
import { CheckoutModule } from './infra/http/checkout/checkout.module';

@Module({
  imports: [DatabaseModule,ParkingModule, SpotModule,CheckInModule]
})
export class AppModule {}
