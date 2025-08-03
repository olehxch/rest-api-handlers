module.exports = function GetBackupsbackups(req, res) {
  res.send({
    command: 'GETBackupsbackups',
    resource: 'backups',
    method: 'GET',
    path: '/backups',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};