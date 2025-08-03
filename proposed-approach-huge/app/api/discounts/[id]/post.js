module.exports = function PostDiscountsdiscountsid(req, res) {
  res.send({
    command: 'POSTDiscountsdiscountsid',
    resource: 'discounts',
    method: 'POST',
    path: '/discounts/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};