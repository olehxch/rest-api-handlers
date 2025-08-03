module.exports = function PatchSubscriptionssubscriptionsid(req, res) {
  res.send({
    command: 'PATCHSubscriptionssubscriptionsid',
    resource: 'subscriptions',
    method: 'PATCH',
    path: '/subscriptions/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};