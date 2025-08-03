module.exports = function PutWebhookswebhooksid(req, res) {
  res.send({
    command: 'PUTWebhookswebhooksid',
    resource: 'webhooks',
    method: 'PUT',
    path: '/webhooks/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};