module.exports = function GetPromotionspromotions(req, res) {
  res.send({
    command: 'GETPromotionspromotions',
    resource: 'promotions',
    method: 'GET',
    path: '/promotions',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};