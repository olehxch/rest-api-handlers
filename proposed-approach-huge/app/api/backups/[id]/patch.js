module.exports = function PatchBackupsbackupsid(req, res) {
  res.send({
    command: 'PATCHBackupsbackupsid',
    resource: 'backups',
    method: 'PATCH',
    path: '/backups/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};