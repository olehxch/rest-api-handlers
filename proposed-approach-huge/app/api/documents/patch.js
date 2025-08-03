module.exports = function PatchDocumentsdocuments(req, res) {
  res.send({
    command: 'PATCHDocumentsdocuments',
    resource: 'documents',
    method: 'PATCH',
    path: '/documents',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};