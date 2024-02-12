module.exports = function GetSatelliteSpecificDetail(ctx) {
  ctx.body = {
    command: 'GetSatelliteSpecificDetail',
    query: ctx.query,
    params: ctx.params,
    data: ctx.body
  };
};