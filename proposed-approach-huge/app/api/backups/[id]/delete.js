module.exports = function DeleteBackupsbackupsid(req, res) {
  res.send({
    command: 'DELETEBackupsbackupsid',
    resource: 'backups',
    method: 'DELETE',
    path: '/backups/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};