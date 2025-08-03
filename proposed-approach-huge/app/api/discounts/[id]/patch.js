module.exports = function PatchDiscountsdiscountsid(req, res) {
  res.send({
    command: 'PATCHDiscountsdiscountsid',
    resource: 'discounts',
    method: 'PATCH',
    path: '/discounts/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};