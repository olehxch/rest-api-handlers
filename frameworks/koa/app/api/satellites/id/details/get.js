module.exports = function GetSatelliteDetails(ctx) {
  ctx.body = {
    command: 'GetSatelliteDetails',
    query: ctx.query,
    params: ctx.params,
    data: ctx.body
  };
};