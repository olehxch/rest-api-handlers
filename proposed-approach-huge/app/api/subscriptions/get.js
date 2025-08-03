module.exports = function GetSubscriptionssubscriptions(req, res) {
  res.send({
    command: 'GETSubscriptionssubscriptions',
    resource: 'subscriptions',
    method: 'GET',
    path: '/subscriptions',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};