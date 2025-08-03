module.exports = function PatchWebhookswebhooksid(req, res) {
  res.send({
    command: 'PATCHWebhookswebhooksid',
    resource: 'webhooks',
    method: 'PATCH',
    path: '/webhooks/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};