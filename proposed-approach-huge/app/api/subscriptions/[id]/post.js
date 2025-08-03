module.exports = function PostSubscriptionssubscriptionsid(req, res) {
  res.send({
    command: 'POSTSubscriptionssubscriptionsid',
    resource: 'subscriptions',
    method: 'POST',
    path: '/subscriptions/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};