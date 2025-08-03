module.exports = function GetFilesfilesiddetails(req, res) {
  res.send({
    command: 'GETFilesfilesiddetails',
    resource: 'files',
    method: 'GET',
    path: '/files/:id/details',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};