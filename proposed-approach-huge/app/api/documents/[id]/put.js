module.exports = function PutDocumentsdocumentsid(req, res) {
  res.send({
    command: 'PUTDocumentsdocumentsid',
    resource: 'documents',
    method: 'PUT',
    path: '/documents/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};