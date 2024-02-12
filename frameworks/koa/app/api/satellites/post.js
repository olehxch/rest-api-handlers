module.exports = function AddSatellite(ctx) {
  ctx.body = {
    command: 'AddSatellite',
    query: ctx.query,
    params: ctx.params,
    data: ctx.body
  };
};