import { Module } from '@nestjs/common';
import { SatelliteDetailsController } from './satellite-details.controller';
import { SatelliteDetailsFullModule } from './details/satellite-details-full.module';

@Module({
  imports: [SatelliteDetailsFullModule],
  controllers: [SatelliteDetailsController]
})
export class SatelliteDetailsModule {}
