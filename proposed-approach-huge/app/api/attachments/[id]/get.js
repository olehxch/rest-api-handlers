module.exports = function GetAttachmentsattachmentsid(req, res) {
  res.send({
    command: 'GETAttachmentsattachmentsid',
    resource: 'attachments',
    method: 'GET',
    path: '/attachments/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};