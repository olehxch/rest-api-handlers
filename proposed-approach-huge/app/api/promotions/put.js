module.exports = function PutPromotionspromotions(req, res) {
  res.send({
    command: 'PUTPromotionspromotions',
    resource: 'promotions',
    method: 'PUT',
    path: '/promotions',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};