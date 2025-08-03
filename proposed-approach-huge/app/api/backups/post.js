module.exports = function PostBackupsbackups(req, res) {
  res.send({
    command: 'POSTBackupsbackups',
    resource: 'backups',
    method: 'POST',
    path: '/backups',
    query: req.query,
    params: req.params,
    data: req.body,
    timestamp: new Date().toISOString()
  });
};