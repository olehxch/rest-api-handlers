module.exports = function GetDocumentsdocumentsidreports(req, res) {
  res.send({
    command: 'GETDocumentsdocumentsidreports',
    resource: 'documents',
    method: 'GET',
    path: '/documents/:id/reports',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};