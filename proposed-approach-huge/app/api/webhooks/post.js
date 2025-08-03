module.exports = function PostWebhookswebhooks(req, res) {
  res.send({
    command: 'POSTWebhookswebhooks',
    resource: 'webhooks',
    method: 'POST',
    path: '/webhooks',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};