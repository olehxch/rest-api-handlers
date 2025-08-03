module.exports = function PostDiscountsdiscounts(req, res) {
  res.send({
    command: 'POSTDiscountsdiscounts',
    resource: 'discounts',
    method: 'POST',
    path: '/discounts',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};