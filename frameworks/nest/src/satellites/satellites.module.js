import { Module } from '@nestjs/common';
import { SatellitesController } from './satellites.controller';
import { SatelliteModule } from './satellite/satellite.module';

@Module({
  imports: [SatelliteModule],
  controllers: [SatellitesController]
})
export class SatellitesModule {}
