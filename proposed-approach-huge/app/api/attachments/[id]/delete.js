module.exports = function DeleteAttachmentsattachmentsid(req, res) {
  res.send({
    command: 'DELETEAttachmentsattachmentsid',
    resource: 'attachments',
    method: 'DELETE',
    path: '/attachments/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};