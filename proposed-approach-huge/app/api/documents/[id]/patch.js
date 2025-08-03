module.exports = function PatchDocumentsdocumentsid(req, res) {
  res.send({
    command: 'PATCHDocumentsdocumentsid',
    resource: 'documents',
    method: 'PATCH',
    path: '/documents/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};