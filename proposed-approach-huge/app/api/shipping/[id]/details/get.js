module.exports = function GetShippingshippingiddetails(req, res) {
  res.send({
    command: 'GETShippingshippingiddetails',
    resource: 'shipping',
    method: 'GET',
    path: '/shipping/:id/details',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};