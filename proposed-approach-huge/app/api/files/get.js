module.exports = function GetFilesfiles(req, res) {
  res.send({
    command: 'GETFilesfiles',
    resource: 'files',
    method: 'GET',
    path: '/files',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};