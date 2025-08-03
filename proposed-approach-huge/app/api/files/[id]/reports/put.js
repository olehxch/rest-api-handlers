module.exports = function PutFilesfilesidreports(req, res) {
  res.send({
    command: 'PUTFilesfilesidreports',
    resource: 'files',
    method: 'PUT',
    path: '/files/:id/reports',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};