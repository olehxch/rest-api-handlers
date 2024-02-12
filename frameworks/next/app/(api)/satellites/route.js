import { NextResponse } from 'next/server'

export async function GET(req) {
  return NextResponse.json({
    command: 'ListSatellites',
    query: req.query,
    params: req.params,
    data: req.body
  });
};

export async function POST(req) {
  return NextResponse.json({
    command: 'AddSatellite',
    query: req.query,
    params: req.params,
    data: req.body
  });
};