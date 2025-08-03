module.exports = function PostDocumentsdocumentsiddetails(req, res) {
  res.send({
    command: 'POSTDocumentsdocumentsiddetails',
    resource: 'documents',
    method: 'POST',
    path: '/documents/:id/details',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};