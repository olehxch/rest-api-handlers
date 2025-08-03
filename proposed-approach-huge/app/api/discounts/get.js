module.exports = function GetDiscountsdiscounts(req, res) {
  res.send({
    command: 'GETDiscountsdiscounts',
    resource: 'discounts',
    method: 'GET',
    path: '/discounts',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};