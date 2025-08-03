module.exports = function DeleteCouponscouponsid(req, res) {
  res.send({
    command: 'DELETECouponscouponsid',
    resource: 'coupons',
    method: 'DELETE',
    path: '/coupons/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};