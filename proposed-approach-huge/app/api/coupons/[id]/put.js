module.exports = function PutCouponscouponsid(req, res) {
  res.send({
    command: 'PUTCouponscouponsid',
    resource: 'coupons',
    method: 'PUT',
    path: '/coupons/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};