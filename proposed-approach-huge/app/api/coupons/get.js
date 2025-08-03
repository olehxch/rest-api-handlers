module.exports = function GetCouponscoupons(req, res) {
  res.send({
    command: 'GETCouponscoupons',
    resource: 'coupons',
    method: 'GET',
    path: '/coupons',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};