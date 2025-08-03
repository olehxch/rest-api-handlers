module.exports = function DeletePromotionspromotions(req, res) {
  res.send({
    command: 'DELETEPromotionspromotions',
    resource: 'promotions',
    method: 'DELETE',
    path: '/promotions',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};