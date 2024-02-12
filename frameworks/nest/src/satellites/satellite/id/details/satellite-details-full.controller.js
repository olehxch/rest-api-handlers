import { Controller, Bind, Get, Put, Patch, Delete, Req } from '@nestjs/common';

@Controller('/satellites')
export class SatelliteDetailsFullController {
  @Get(':id/details/:detailsId')
  @Bind(Req())
  GetSatelliteSpecificDetail(req) {
    return {
      command: 'GetSatelliteSpecificDetail',
      query: req.query,
      params: req.params,
      data: req.body
    };
  }
}

