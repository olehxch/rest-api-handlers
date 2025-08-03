module.exports = function DeleteWebhookswebhooksid(req, res) {
  res.send({
    command: 'DELETEWebhookswebhooksid',
    resource: 'webhooks',
    method: 'DELETE',
    path: '/webhooks/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};