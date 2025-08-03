module.exports = function GetWebhookswebhooksid(req, res) {
  res.send({
    command: 'GETWebhookswebhooksid',
    resource: 'webhooks',
    method: 'GET',
    path: '/webhooks/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};