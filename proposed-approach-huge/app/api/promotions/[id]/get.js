module.exports = function GetPromotionspromotionsid(req, res) {
  res.send({
    command: 'GETPromotionspromotionsid',
    resource: 'promotions',
    method: 'GET',
    path: '/promotions/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};