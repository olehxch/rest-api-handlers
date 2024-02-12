import { Controller, Bind, Get, Post, Req } from '@nestjs/common';

@Controller('/satellites')
export class SatellitesController {
  @Get()
  @Bind(Req())
  ListSatellites(req) {
    return {
      command: 'ListSatellites',
      query: req.query,
      params: req.params,
      data: req.body
    };
  }

  @Post()
  @Bind(Req())
  AddSatellite(req) {
    return {
      command: 'AddSatellite',
      query: req.query,
      params: req.params,
      data: req.body
    };
  }
}

