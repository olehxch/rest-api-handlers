module.exports = function PostBackupsbackupsid(req, res) {
  res.send({
    command: 'POSTBackupsbackupsid',
    resource: 'backups',
    method: 'POST',
    path: '/backups/:id',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};