module.exports = function DeleteSubscriptionssubscriptionsid(req, res) {
  res.send({
    command: 'DELETESubscriptionssubscriptionsid',
    resource: 'subscriptions',
    method: 'DELETE',
    path: '/subscriptions/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};