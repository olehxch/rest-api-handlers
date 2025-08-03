module.exports = function PutBackupsbackupsid(req, res) {
  res.send({
    command: 'PUTBackupsbackupsid',
    resource: 'backups',
    method: 'PUT',
    path: '/backups/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};