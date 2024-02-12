import { Controller, Bind, Get, Put, Patch, Delete, Req } from '@nestjs/common';

@Controller('/satellites')
export class SatelliteDetailsController {
  @Get(':id/details')
  @Bind(Req())
  GetSatelliteDetails(req) {
    return {
      command: 'GetSatelliteDetails',
      query: req.query,
      params: req.params,
      data: req.body
    };
  }
}

