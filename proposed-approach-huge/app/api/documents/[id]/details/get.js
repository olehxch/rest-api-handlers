module.exports = function GetDocumentsdocumentsiddetails(req, res) {
  res.send({
    command: 'GETDocumentsdocumentsiddetails',
    resource: 'documents',
    method: 'GET',
    path: '/documents/:id/details',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};