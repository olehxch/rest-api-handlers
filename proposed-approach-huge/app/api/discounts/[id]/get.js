module.exports = function GetDiscountsdiscountsid(req, res) {
  res.send({
    command: 'GETDiscountsdiscountsid',
    resource: 'discounts',
    method: 'GET',
    path: '/discounts/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};