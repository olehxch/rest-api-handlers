module.exports = function PutDocumentsdocuments(req, res) {
  res.send({
    command: 'PUTDocumentsdocuments',
    resource: 'documents',
    method: 'PUT',
    path: '/documents',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};