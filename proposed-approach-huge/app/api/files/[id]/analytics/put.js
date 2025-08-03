module.exports = function PutFilesfilesidanalytics(req, res) {
  res.send({
    command: 'PUTFilesfilesidanalytics',
    resource: 'files',
    method: 'PUT',
    path: '/files/:id/analytics',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};