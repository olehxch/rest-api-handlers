import { NextResponse } from 'next/server'

export async function GET(req) {
  return NextResponse.json({
    command: 'GetSatelliteSpecificDetail',
    query: req.query,
    params: req.params,
    data: req.body
  });
};
