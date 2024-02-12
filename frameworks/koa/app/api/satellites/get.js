module.exports = function ListSatellites(ctx) {
  ctx.body = {
    command: 'ListSatellites',
    query: ctx.query,
    params: ctx.params,
    data: ctx.body
  };
};