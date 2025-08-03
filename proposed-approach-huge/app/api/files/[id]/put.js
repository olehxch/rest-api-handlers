module.exports = function PutFilesfilesid(req, res) {
  res.send({
    command: 'PUTFilesfilesid',
    resource: 'files',
    method: 'PUT',
    path: '/files/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};