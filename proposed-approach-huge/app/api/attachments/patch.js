module.exports = function PatchAttachmentsattachments(req, res) {
  res.send({
    command: 'PATCHAttachmentsattachments',
    resource: 'attachments',
    method: 'PATCH',
    path: '/attachments',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};