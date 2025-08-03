module.exports = function PatchPromotionspromotionsid(req, res) {
  res.send({
    command: 'PATCHPromotionspromotionsid',
    resource: 'promotions',
    method: 'PATCH',
    path: '/promotions/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};