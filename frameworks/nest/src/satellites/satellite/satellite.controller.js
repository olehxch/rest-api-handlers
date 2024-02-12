import { Controller, Bind, Get, Put, Patch, Delete, Req } from '@nestjs/common';

@Controller('/satellites')
export class SatelliteController {
  @Get(':id')
  @Bind(Req())
  GetSatellite(req) {
    return {
      command: 'GetSatellite',
      query: req.query,
      params: req.params,
      data: req.body
    };
  }

  @Put(':id')
  @Bind(Req())
  UpdateSatellite(req) {
    return {
      command: 'UpdateSatellite',
      query: req.query,
      params: req.params,
      data: req.body
    };
  }

  @Patch(':id')
  @Bind(Req())
  PartialUpdateSatellite(req) {
    return {
      command: 'PartialUpdateSatellite',
      query: req.query,
      params: req.params,
      data: req.body
    };
  }

  @Delete(':id')
  @Bind(Req())
  DeleteSatellite(req) {
    return {
      command: 'DeleteSatellite',
      query: req.query,
      params: req.params,
      data: req.body
    };
  }
}

