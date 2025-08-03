module.exports = function PatchSubscriptionssubscriptions(req, res) {
  res.send({
    command: 'PATCHSubscriptionssubscriptions',
    resource: 'subscriptions',
    method: 'PATCH',
    path: '/subscriptions',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};