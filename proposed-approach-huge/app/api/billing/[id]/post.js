module.exports = function PostBillingbillingid(req, res) {
  res.send({
    command: 'POSTBillingbillingid',
    resource: 'billing',
    method: 'POST',
    path: '/billing/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};