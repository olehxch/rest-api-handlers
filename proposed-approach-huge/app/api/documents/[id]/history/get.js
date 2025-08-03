module.exports = function GetDocumentsdocumentsidhistory(req, res) {
  res.send({
    command: 'GETDocumentsdocumentsidhistory',
    resource: 'documents',
    method: 'GET',
    path: '/documents/:id/history',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};