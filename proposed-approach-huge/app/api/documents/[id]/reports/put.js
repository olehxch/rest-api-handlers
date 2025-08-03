module.exports = function PutDocumentsdocumentsidreports(req, res) {
  res.send({
    command: 'PUTDocumentsdocumentsidreports',
    resource: 'documents',
    method: 'PUT',
    path: '/documents/:id/reports',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};