module.exports = function GetSatellite(ctx) {
  ctx.body = {
    command: 'GetSatellite',
    query: ctx.query,
    params: ctx.params,
    data: ctx.body
  };
};