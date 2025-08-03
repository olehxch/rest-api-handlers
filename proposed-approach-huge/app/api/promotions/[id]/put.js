module.exports = function PutPromotionspromotionsid(req, res) {
  res.send({
    command: 'PUTPromotionspromotionsid',
    resource: 'promotions',
    method: 'PUT',
    path: '/promotions/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};