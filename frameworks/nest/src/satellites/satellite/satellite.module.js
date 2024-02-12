import { Module } from '@nestjs/common';
import { SatelliteController } from './satellite.controller';
import { SatelliteDetailsModule } from './id/satellite-details.module';

@Module({
  imports: [SatelliteDetailsModule],
  controllers: [SatelliteController]
})
export class SatelliteModule {}
