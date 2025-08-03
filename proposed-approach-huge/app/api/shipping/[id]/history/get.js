module.exports = function GetShippingshippingidhistory(req, res) {
  res.send({
    command: 'GETShippingshippingidhistory',
    resource: 'shipping',
    method: 'GET',
    path: '/shipping/:id/history',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};