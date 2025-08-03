module.exports = function DeletePromotionspromotionsid(req, res) {
  res.send({
    command: 'DELETEPromotionspromotionsid',
    resource: 'promotions',
    method: 'DELETE',
    path: '/promotions/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};