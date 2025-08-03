module.exports = function PatchAttachmentsattachmentsid(req, res) {
  res.send({
    command: 'PATCHAttachmentsattachmentsid',
    resource: 'attachments',
    method: 'PATCH',
    path: '/attachments/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};