module.exports = function PostAttachmentsattachmentsid(req, res) {
  res.send({
    command: 'POSTAttachmentsattachmentsid',
    resource: 'attachments',
    method: 'POST',
    path: '/attachments/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};