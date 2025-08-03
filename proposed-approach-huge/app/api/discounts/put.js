module.exports = function PutDiscountsdiscounts(req, res) {
  res.send({
    command: 'PUTDiscountsdiscounts',
    resource: 'discounts',
    method: 'PUT',
    path: '/discounts',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};