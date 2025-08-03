module.exports = function GetSubscriptionssubscriptionsid(req, res) {
  res.send({
    command: 'GETSubscriptionssubscriptionsid',
    resource: 'subscriptions',
    method: 'GET',
    path: '/subscriptions/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};