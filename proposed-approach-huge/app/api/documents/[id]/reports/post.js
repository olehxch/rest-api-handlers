module.exports = function PostDocumentsdocumentsidreports(req, res) {
  res.send({
    command: 'POSTDocumentsdocumentsidreports',
    resource: 'documents',
    method: 'POST',
    path: '/documents/:id/reports',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};