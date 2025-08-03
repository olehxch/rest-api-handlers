module.exports = function DeleteDocumentsdocumentsid(req, res) {
  res.send({
    command: 'DELETEDocumentsdocumentsid',
    resource: 'documents',
    method: 'DELETE',
    path: '/documents/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};