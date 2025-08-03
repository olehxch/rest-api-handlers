module.exports = function DeleteAttachmentsattachments(req, res) {
  res.send({
    command: 'DELETEAttachmentsattachments',
    resource: 'attachments',
    method: 'DELETE',
    path: '/attachments',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};