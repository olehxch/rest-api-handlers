module.exports = function DeleteDocumentsdocuments(req, res) {
  res.send({
    command: 'DELETEDocumentsdocuments',
    resource: 'documents',
    method: 'DELETE',
    path: '/documents',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};