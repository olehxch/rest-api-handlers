module.exports = function DeleteCouponscoupons(req, res) {
  res.send({
    command: 'DELETECouponscoupons',
    resource: 'coupons',
    method: 'DELETE',
    path: '/coupons',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};