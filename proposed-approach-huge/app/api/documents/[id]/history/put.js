module.exports = function PutDocumentsdocumentsidhistory(req, res) {
  res.send({
    command: 'PUTDocumentsdocumentsidhistory',
    resource: 'documents',
    method: 'PUT',
    path: '/documents/:id/history',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};