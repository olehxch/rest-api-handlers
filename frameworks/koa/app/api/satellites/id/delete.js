module.exports = function DeleteSatellite(ctx) {
  ctx.body = {
    command: 'DeleteSatellite',
    query: ctx.query,
    params: ctx.params,
    data: ctx.body
  };
};