module.exports = function PutSubscriptionssubscriptionsid(req, res) {
  res.send({
    command: 'PUTSubscriptionssubscriptionsid',
    resource: 'subscriptions',
    method: 'PUT',
    path: '/subscriptions/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};