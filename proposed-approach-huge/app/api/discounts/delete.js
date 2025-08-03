module.exports = function DeleteDiscountsdiscounts(req, res) {
  res.send({
    command: 'DELETEDiscountsdiscounts',
    resource: 'discounts',
    method: 'DELETE',
    path: '/discounts',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};