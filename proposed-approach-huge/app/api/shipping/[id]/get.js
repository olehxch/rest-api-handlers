module.exports = function GetShippingshippingid(req, res) {
  res.send({
    command: 'GETShippingshippingid',
    resource: 'shipping',
    method: 'GET',
    path: '/shipping/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};