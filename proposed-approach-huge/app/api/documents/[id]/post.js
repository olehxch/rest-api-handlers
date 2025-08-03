module.exports = function PostDocumentsdocumentsid(req, res) {
  res.send({
    command: 'POSTDocumentsdocumentsid',
    resource: 'documents',
    method: 'POST',
    path: '/documents/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};