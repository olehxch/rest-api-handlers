module.exports = function PostDocumentsdocumentsidhistory(req, res) {
  res.send({
    command: 'POSTDocumentsdocumentsidhistory',
    resource: 'documents',
    method: 'POST',
    path: '/documents/:id/history',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};