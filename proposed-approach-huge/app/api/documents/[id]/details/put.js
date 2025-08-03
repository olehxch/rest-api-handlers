module.exports = function PutDocumentsdocumentsiddetails(req, res) {
  res.send({
    command: 'PUTDocumentsdocumentsiddetails',
    resource: 'documents',
    method: 'PUT',
    path: '/documents/:id/details',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};