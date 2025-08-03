module.exports = function GetDocumentsdocumentsid(req, res) {
  res.send({
    command: 'GETDocumentsdocumentsid',
    resource: 'documents',
    method: 'GET',
    path: '/documents/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};