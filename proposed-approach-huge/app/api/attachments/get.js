module.exports = function GetAttachmentsattachments(req, res) {
  res.send({
    command: 'GETAttachmentsattachments',
    resource: 'attachments',
    method: 'GET',
    path: '/attachments',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};