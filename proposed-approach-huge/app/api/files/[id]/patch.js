module.exports = function PatchFilesfilesid(req, res) {
  res.send({
    command: 'PATCHFilesfilesid',
    resource: 'files',
    method: 'PATCH',
    path: '/files/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};