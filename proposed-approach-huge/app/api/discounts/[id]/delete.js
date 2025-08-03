module.exports = function DeleteDiscountsdiscountsid(req, res) {
  res.send({
    command: 'DELETEDiscountsdiscountsid',
    resource: 'discounts',
    method: 'DELETE',
    path: '/discounts/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};