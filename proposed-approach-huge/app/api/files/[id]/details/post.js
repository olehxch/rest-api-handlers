module.exports = function PostFilesfilesiddetails(req, res) {
  res.send({
    command: 'POSTFilesfilesiddetails',
    resource: 'files',
    method: 'POST',
    path: '/files/:id/details',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};