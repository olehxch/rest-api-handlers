module.exports = function PutAttachmentsattachments(req, res) {
  res.send({
    command: 'PUTAttachmentsattachments',
    resource: 'attachments',
    method: 'PUT',
    path: '/attachments',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};