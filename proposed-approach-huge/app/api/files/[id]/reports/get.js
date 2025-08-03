module.exports = function GetFilesfilesidreports(req, res) {
  res.send({
    command: 'GETFilesfilesidreports',
    resource: 'files',
    method: 'GET',
    path: '/files/:id/reports',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};