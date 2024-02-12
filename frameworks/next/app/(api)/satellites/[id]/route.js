import { NextResponse } from 'next/server'

export async function GET(req) {
  return NextResponse.json({
    command: 'GetSatellite',
    query: req.query,
    params: req.params,
    data: req.body
  });
};

export async function PATCH(req) {
  return NextResponse.json({
    command: 'PartialUpdateSatellite',
    query: req.query,
    params: req.params,
    data: req.body
  });
};

export async function PUT(req) {
  return NextResponse.json({
    command: 'UpdateSatellite',
    query: req.query,
    params: req.params,
    data: req.body
  });
};

export async function DELETE(req) {
  return NextResponse.json({
    command: 'DeleteSatellite',
    query: req.query,
    params: req.params,
    data: req.body
  });
};