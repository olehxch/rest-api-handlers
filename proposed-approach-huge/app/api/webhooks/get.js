module.exports = function GetWebhookswebhooks(req, res) {
  res.send({
    command: 'GETWebhookswebhooks',
    resource: 'webhooks',
    method: 'GET',
    path: '/webhooks',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};