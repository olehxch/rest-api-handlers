module.exports = function DeleteSubscriptionssubscriptions(req, res) {
  res.send({
    command: 'DELETESubscriptionssubscriptions',
    resource: 'subscriptions',
    method: 'DELETE',
    path: '/subscriptions',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};