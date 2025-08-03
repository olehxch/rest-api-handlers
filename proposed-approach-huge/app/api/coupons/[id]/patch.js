module.exports = function PatchCouponscouponsid(req, res) {
  res.send({
    command: 'PATCHCouponscouponsid',
    resource: 'coupons',
    method: 'PATCH',
    path: '/coupons/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};