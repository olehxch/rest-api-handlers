module.exports = function PostPromotionspromotions(req, res) {
  res.send({
    command: 'POSTPromotionspromotions',
    resource: 'promotions',
    method: 'POST',
    path: '/promotions',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};