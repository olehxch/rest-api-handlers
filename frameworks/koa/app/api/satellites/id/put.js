module.exports = function UpdateSatellite(ctx) {
  ctx.body = {
    command: 'UpdateSatellite',
    query: ctx.query,
    params: ctx.params,
    data: ctx.body
  };
};