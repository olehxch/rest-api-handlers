module.exports = function GetFilesfilesid(req, res) {
  res.send({
    command: 'GETFilesfilesid',
    resource: 'files',
    method: 'GET',
    path: '/files/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};