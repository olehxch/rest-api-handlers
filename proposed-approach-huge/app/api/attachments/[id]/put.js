module.exports = function PutAttachmentsattachmentsid(req, res) {
  res.send({
    command: 'PUTAttachmentsattachmentsid',
    resource: 'attachments',
    method: 'PUT',
    path: '/attachments/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};