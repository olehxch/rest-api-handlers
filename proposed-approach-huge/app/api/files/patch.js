module.exports = function PatchFilesfiles(req, res) {
  res.send({
    command: 'PATCHFilesfiles',
    resource: 'files',
    method: 'PATCH',
    path: '/files',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};