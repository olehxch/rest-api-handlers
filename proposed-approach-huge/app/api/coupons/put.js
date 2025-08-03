module.exports = function PutCouponscoupons(req, res) {
  res.send({
    command: 'PUTCouponscoupons',
    resource: 'coupons',
    method: 'PUT',
    path: '/coupons',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};