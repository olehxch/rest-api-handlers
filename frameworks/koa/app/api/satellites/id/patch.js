module.exports = function PartialUpdateSatellite(ctx) {
  ctx.body = {
    command: 'PartialUpdateSatellite',
    query: ctx.query,
    params: ctx.params,
    data: ctx.body
  };
};