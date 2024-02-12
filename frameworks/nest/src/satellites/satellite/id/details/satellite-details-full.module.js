import { Module } from '@nestjs/common';
import { SatelliteDetailsFullController } from './satellite-details-full.controller';

@Module({
  imports: [],
  controllers: [SatelliteDetailsFullController]
})
export class SatelliteDetailsFullModule {}
