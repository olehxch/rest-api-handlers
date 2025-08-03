module.exports = function PatchDiscountsdiscounts(req, res) {
  res.send({
    command: 'PATCHDiscountsdiscounts',
    resource: 'discounts',
    method: 'PATCH',
    path: '/discounts',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};