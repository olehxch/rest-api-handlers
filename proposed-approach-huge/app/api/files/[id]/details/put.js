module.exports = function PutFilesfilesiddetails(req, res) {
  res.send({
    command: 'PUTFilesfilesiddetails',
    resource: 'files',
    method: 'PUT',
    path: '/files/:id/details',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};