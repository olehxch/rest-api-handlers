module.exports = function DeleteFilesfilesid(req, res) {
  res.send({
    command: 'DELETEFilesfilesid',
    resource: 'files',
    method: 'DELETE',
    path: '/files/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};