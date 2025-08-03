module.exports = function PostFilesfiles(req, res) {
  res.send({
    command: 'POSTFilesfiles',
    resource: 'files',
    method: 'POST',
    path: '/files',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};