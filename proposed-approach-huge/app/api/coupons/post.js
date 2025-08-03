module.exports = function PostCouponscoupons(req, res) {
  res.send({
    command: 'POSTCouponscoupons',
    resource: 'coupons',
    method: 'POST',
    path: '/coupons',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};