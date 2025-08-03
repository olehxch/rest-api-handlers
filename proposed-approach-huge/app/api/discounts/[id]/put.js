module.exports = function PutDiscountsdiscountsid(req, res) {
  res.send({
    command: 'PUTDiscountsdiscountsid',
    resource: 'discounts',
    method: 'PUT',
    path: '/discounts/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};