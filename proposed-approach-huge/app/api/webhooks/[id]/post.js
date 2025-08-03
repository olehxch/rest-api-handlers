module.exports = function PostWebhookswebhooksid(req, res) {
  res.send({
    command: 'POSTWebhookswebhooksid',
    resource: 'webhooks',
    method: 'POST',
    path: '/webhooks/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};