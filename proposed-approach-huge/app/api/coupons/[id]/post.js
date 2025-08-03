module.exports = function PostCouponscouponsid(req, res) {
  res.send({
    command: 'POSTCouponscouponsid',
    resource: 'coupons',
    method: 'POST',
    path: '/coupons/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};