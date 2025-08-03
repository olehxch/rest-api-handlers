module.exports = function DeleteFilesfiles(req, res) {
  res.send({
    command: 'DELETEFilesfiles',
    resource: 'files',
    method: 'DELETE',
    path: '/files',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};