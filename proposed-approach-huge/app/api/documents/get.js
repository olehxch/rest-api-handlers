module.exports = function GetDocumentsdocuments(req, res) {
  res.send({
    command: 'GETDocumentsdocuments',
    resource: 'documents',
    method: 'GET',
    path: '/documents',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};