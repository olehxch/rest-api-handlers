module.exports = function PutSubscriptionssubscriptions(req, res) {
  res.send({
    command: 'PUTSubscriptionssubscriptions',
    resource: 'subscriptions',
    method: 'PUT',
    path: '/subscriptions',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};