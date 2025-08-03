module.exports = function GetBackupsbackupsid(req, res) {
  res.send({
    command: 'GETBackupsbackupsid',
    resource: 'backups',
    method: 'GET',
    path: '/backups/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};