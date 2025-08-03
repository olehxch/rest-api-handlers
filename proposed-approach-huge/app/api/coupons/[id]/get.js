module.exports = function GetCouponscouponsid(req, res) {
  res.send({
    command: 'GETCouponscouponsid',
    resource: 'coupons',
    method: 'GET',
    path: '/coupons/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};