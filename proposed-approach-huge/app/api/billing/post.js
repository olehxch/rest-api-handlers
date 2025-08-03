module.exports = function PostBillingbilling(req, res) {
  res.send({
    command: 'POSTBillingbilling',
    resource: 'billing',
    method: 'POST',
    path: '/billing',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};