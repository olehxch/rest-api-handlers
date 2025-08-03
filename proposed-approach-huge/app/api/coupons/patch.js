module.exports = function PatchCouponscoupons(req, res) {
  res.send({
    command: 'PATCHCouponscoupons',
    resource: 'coupons',
    method: 'PATCH',
    path: '/coupons',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};