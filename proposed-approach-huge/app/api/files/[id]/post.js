module.exports = function PostFilesfilesid(req, res) {
  res.send({
    command: 'POSTFilesfilesid',
    resource: 'files',
    method: 'POST',
    path: '/files/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};