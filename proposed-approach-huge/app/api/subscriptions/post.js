module.exports = function PostSubscriptionssubscriptions(req, res) {
  res.send({
    command: 'POSTSubscriptionssubscriptions',
    resource: 'subscriptions',
    method: 'POST',
    path: '/subscriptions',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};