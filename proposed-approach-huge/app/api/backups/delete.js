module.exports = function DeleteBackupsbackups(req, res) {
  res.send({
    command: 'DELETEBackupsbackups',
    resource: 'backups',
    method: 'DELETE',
    path: '/backups',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};