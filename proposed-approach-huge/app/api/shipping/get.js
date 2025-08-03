module.exports = function GetShippingshipping(req, res) {
  res.send({
    command: 'GETShippingshipping',
    resource: 'shipping',
    method: 'GET',
    path: '/shipping',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};