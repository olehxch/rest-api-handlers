module.exports = function PostPromotionspromotionsid(req, res) {
  res.send({
    command: 'POSTPromotionspromotionsid',
    resource: 'promotions',
    method: 'POST',
    path: '/promotions/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};