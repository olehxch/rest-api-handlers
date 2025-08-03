module.exports = function PatchPromotionspromotions(req, res) {
  res.send({
    command: 'PATCHPromotionspromotions',
    resource: 'promotions',
    method: 'PATCH',
    path: '/promotions',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};