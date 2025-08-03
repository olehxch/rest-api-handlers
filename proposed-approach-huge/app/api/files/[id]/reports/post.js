module.exports = function PostFilesfilesidreports(req, res) {
  res.send({
    command: 'POSTFilesfilesidreports',
    resource: 'files',
    method: 'POST',
    path: '/files/:id/reports',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};