module.exports = function PutDocumentsdocumentsidanalytics(req, res) {
  res.send({
    command: 'PUTDocumentsdocumentsidanalytics',
    resource: 'documents',
    method: 'PUT',
    path: '/documents/:id/analytics',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};