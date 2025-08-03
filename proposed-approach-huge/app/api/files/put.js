module.exports = function PutFilesfiles(req, res) {
  res.send({
    command: 'PUTFilesfiles',
    resource: 'files',
    method: 'PUT',
    path: '/files',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};