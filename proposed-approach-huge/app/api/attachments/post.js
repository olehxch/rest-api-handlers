module.exports = function PostAttachmentsattachments(req, res) {
  res.send({
    command: 'POSTAttachmentsattachments',
    resource: 'attachments',
    method: 'POST',
    path: '/attachments',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};