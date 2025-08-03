module.exports = function PostDocumentsdocuments(req, res) {
  res.send({
    command: 'POSTDocumentsdocuments',
    resource: 'documents',
    method: 'POST',
    path: '/documents',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};